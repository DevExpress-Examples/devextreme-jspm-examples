param (
    [string]$buildVersion = $Env:CodeCentralBuildVersion
)

$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$projectDir = Join-Path $scriptDir "jspm-jquery"
$packageJsonPath = Join-Path $projectDir "package.json"
$configJsPath = Join-Path $projectDir "config.js"

# Check for Git installation
Write-Host "Checking prerequisites..." -ForegroundColor Cyan
$gitInstalled = $null -ne (Get-Command git -ErrorAction SilentlyContinue)

if (-not $gitInstalled) {
    Write-Host "ERROR: Git is not installed!" -ForegroundColor Red
    Write-Host ""
    Write-Host "JSPM requires Git to download packages from GitHub." -ForegroundColor Yellow
    Write-Host "Please install Git from: https://git-scm.com/downloads" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "After installing Git:" -ForegroundColor Cyan
    Write-Host "  1. Restart your terminal/PowerShell" -ForegroundColor White
    Write-Host "  2. Run this script again" -ForegroundColor White
    Write-Host ""
    exit 1
}

Write-Host "✓ Git is installed" -ForegroundColor Green

# Check for Node.js
$nodeInstalled = $null -ne (Get-Command node -ErrorAction SilentlyContinue)
if (-not $nodeInstalled) {
    Write-Host "ERROR: Node.js is not installed!" -ForegroundColor Red
    Write-Host "Please install Node.js from: https://nodejs.org/" -ForegroundColor Yellow
    exit 1
}

Write-Host "✓ Node.js is installed" -ForegroundColor Green
Write-Host ""

if ([string]::IsNullOrEmpty($buildVersion)) {
    Write-Host "Build version is not specified. Skipping version update." -ForegroundColor Yellow
} else {
    Write-Host "Updating DevExtreme version to: $buildVersion" -ForegroundColor Green
}

# Node.js script to update package.json
$updatePackageJson = @"
const fs = require('fs');
const path = require('path');

const packageJsonPath = process.argv[2];
const newVersion = process.argv[3];

const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

if (packageJson.jspm && packageJson.jspm.dependencies && packageJson.jspm.dependencies.devextreme) {
    packageJson.jspm.dependencies.devextreme = 'npm:devextreme@^' + newVersion;
    fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2) + '\n', 'utf8');
    console.log('Updated package.json: devextreme@^' + newVersion);
} else {
    console.error('Could not find devextreme in package.json jspm dependencies');
    process.exit(1);
}
"@

# Node.js script to update config.js
$updateConfigJs = @"
const fs = require('fs');
const path = require('path');

const configJsPath = process.argv[2];
const newVersion = process.argv[3];

let content = fs.readFileSync(configJsPath, 'utf8');

// Update the main devextreme mapping
content = content.replace(
    /"devextreme":\s*"npm:devextreme@[\d.]+"/g,
    '"devextreme": "npm:devextreme@' + newVersion + '"'
);

// Update devextreme path mappings
content = content.replace(
    /"devextreme\/([^"]+)":\s*"npm:devextreme@[\d.]+\//g,
    '"devextreme/\$1": "npm:devextreme@' + newVersion + '/'
);

// Update packages section for devextreme (not @devextreme/runtime)
content = content.replace(
    /"npm:devextreme@[\d.]+"\s*:\s*\{/g,
    '"npm:devextreme@' + newVersion + '": {'
);

fs.writeFileSync(configJsPath, content, 'utf8');
console.log('Updated config.js: devextreme@' + newVersion);
"@

# Save Node.js scripts to temp files
$tempDir = if ($env:TEMP) { $env:TEMP } else { $env:TMPDIR -replace '/$', '' }
$updatePackageJsonScript = Join-Path $tempDir "update-package-json.js"
$updateConfigJsScript = Join-Path $tempDir "update-config-js.js"

Set-Content -Path $updatePackageJsonScript -Value $updatePackageJson
Set-Content -Path $updateConfigJsScript -Value $updateConfigJs

try {
    # Update versions only if buildVersion is specified
    if (-not [string]::IsNullOrEmpty($buildVersion)) {
        # Update package.json
        Write-Host "Updating package.json..." -ForegroundColor Cyan
        node $updatePackageJsonScript $packageJsonPath $buildVersion
        if ($LASTEXITCODE -ne 0) {
            throw "Failed to update package.json"
        }

        # Update config.js
        Write-Host "Updating config.js..." -ForegroundColor Cyan
        node $updateConfigJsScript $configJsPath $buildVersion
        if ($LASTEXITCODE -ne 0) {
            throw "Failed to update config.js"
        }

        Write-Host "`nSuccessfully updated DevExtreme version to $buildVersion" -ForegroundColor Green
        Write-Host "Files updated:" -ForegroundColor Yellow
        Write-Host "  - $packageJsonPath" -ForegroundColor Gray
        Write-Host "  - $configJsPath" -ForegroundColor Gray
        Write-Host ""
    }

    # Run npm install
    Write-Host "Running npm install..." -ForegroundColor Cyan
    Push-Location $projectDir
    try {
        npm install
        if ($LASTEXITCODE -ne 0) {
            throw "npm install failed with exit code $LASTEXITCODE"
        }
        Write-Host "npm install completed successfully" -ForegroundColor Green
        Write-Host ""

        # Run npm run build (if build script exists)
        $packageJson = Get-Content $packageJsonPath | ConvertFrom-Json
        if ($packageJson.scripts.PSObject.Properties.Name -contains "build") {
            Write-Host "Running npm run build..." -ForegroundColor Cyan
            npm run build
            if ($LASTEXITCODE -ne 0) {
                throw "npm run build failed with exit code $LASTEXITCODE"
            }
            Write-Host "npm run build completed successfully" -ForegroundColor Green
        } else {
            Write-Host "No build script found in package.json, skipping build step" -ForegroundColor Yellow
        }
    }
    finally {
        Pop-Location
    }

    Write-Host "`nAll steps completed successfully!" -ForegroundColor Green
}
catch {
    Write-Error "An error occurred: $_"
    exit 1
}
finally {
    # Clean up temp files
    if (Test-Path $updatePackageJsonScript) {
        Remove-Item $updatePackageJsonScript -Force
    }
    if (Test-Path $updateConfigJsScript) {
        Remove-Item $updateConfigJsScript -Force
    }
}

exit 0
