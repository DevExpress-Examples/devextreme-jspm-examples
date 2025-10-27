System.config({
  defaultJSExtensions: true,
  transpiler: "babel",
  babelOptions: {
    "optional": [
      "runtime",
      "optimisation.modules.system"
    ]
  },
  paths: {
    "npm:*": "jspm_packages/npm/*",
    "github:*": "jspm_packages/github/*"
  },

  packages: {
    "npm:devextreme@23.1.3": {
      "main": "cjs/bundles/dx.all.js",
      "map": {
        "./integration/jquery": "./cjs/integration/jquery",
        "./ui/button": "./cjs/ui/button",
        "./ui/dialog": "./cjs/ui/dialog"
      }
    },
    "npm:@devextreme/runtime@3.0.11": {
      "map": {
        "./inferno": "./cjs/inferno"
      }
    }
  },

  map: {
    "@devextreme/runtime": "npm:@devextreme/runtime@3.0.11",
    "@devextreme/runtime/inferno": "npm:@devextreme/runtime@3.0.11/inferno",
    "babel": "npm:babel-core@5.8.38",
    "babel-runtime": "npm:babel-runtime@5.8.38",
    "core-js": "npm:core-js@1.2.7",
    "css": "github:systemjs/plugin-css@0.1.32",
    "devextreme": "npm:devextreme@23.1.3",
    "devextreme/": "npm:devextreme@23.1.3/cjs/ui/dialog",
    "jquery": "npm:jquery@3.5.1",
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.4.1"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.6.0"
    },
    "github:jspm/nodelibs-crypto@0.1.0": {
      "crypto-browserify": "npm:crypto-browserify@3.12.1"
    },
    "github:jspm/nodelibs-events@0.1.1": {
      "events": "npm:events@1.0.2"
    },
    "github:jspm/nodelibs-os@0.1.0": {
      "os-browserify": "npm:os-browserify@0.1.2"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.9"
    },
    "github:jspm/nodelibs-stream@0.1.0": {
      "stream-browserify": "npm:stream-browserify@1.0.0"
    },
    "github:jspm/nodelibs-string_decoder@0.1.0": {
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:jspm/nodelibs-vm@0.1.0": {
      "vm-browserify": "npm:vm-browserify@0.0.4"
    },
    "npm:@devexpress/utils@1.3.16": {
      "tslib": "npm:tslib@2.0.1"
    },
    "npm:@devexpress/utils@1.4.1": {
      "tslib": "npm:tslib@2.3.1"
    },
    "npm:@devextreme/runtime@3.0.11": {
      "inferno": "npm:inferno@7.4.11",
      "inferno-create-element": "npm:inferno-create-element@7.4.11",
      "inferno-hydrate": "npm:inferno-hydrate@7.4.11",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:ansi-styles@4.3.0": {
      "color-convert": "npm:color-convert@2.0.1"
    },
    "npm:asn1.js@4.10.1": {
      "bn.js": "npm:bn.js@4.12.2",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.1",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:assert@1.4.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "npm:util@0.10.3"
    },
    "npm:available-typed-arrays@1.0.7": {
      "possible-typed-array-names": "npm:possible-typed-array-names@1.1.0"
    },
    "npm:babel-runtime@5.8.38": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:browserify-aes@1.2.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "buffer-xor": "npm:buffer-xor@1.0.3",
      "cipher-base": "npm:cipher-base@1.0.7",
      "create-hash": "npm:create-hash@1.2.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.3",
      "inherits": "npm:inherits@2.0.1",
      "safe-buffer": "npm:safe-buffer@5.2.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:browserify-cipher@1.0.1": {
      "browserify-aes": "npm:browserify-aes@1.2.0",
      "browserify-des": "npm:browserify-des@1.0.2",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.3"
    },
    "npm:browserify-des@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "cipher-base": "npm:cipher-base@1.0.7",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "des.js": "npm:des.js@1.1.0",
      "inherits": "npm:inherits@2.0.1",
      "safe-buffer": "npm:safe-buffer@5.2.1"
    },
    "npm:browserify-rsa@4.1.1": {
      "bn.js": "npm:bn.js@5.2.2",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "randombytes": "npm:randombytes@2.1.0",
      "safe-buffer": "npm:safe-buffer@5.2.1"
    },
    "npm:browserify-sign@4.2.5": {
      "bn.js": "npm:bn.js@5.2.2",
      "browserify-rsa": "npm:browserify-rsa@4.1.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.2.0",
      "create-hmac": "npm:create-hmac@1.1.7",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "elliptic": "npm:elliptic@6.6.1",
      "inherits": "npm:inherits@2.0.4",
      "parse-asn1": "npm:parse-asn1@5.1.9",
      "readable-stream": "npm:readable-stream@2.3.8",
      "safe-buffer": "npm:safe-buffer@5.2.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:buffer-xor@1.0.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:buffer@3.6.0": {
      "base64-js": "npm:base64-js@0.0.8",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "ieee754": "npm:ieee754@1.1.8",
      "isarray": "npm:isarray@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:call-bind-apply-helpers@1.0.2": {
      "es-errors": "npm:es-errors@1.3.0",
      "function-bind": "npm:function-bind@1.1.2"
    },
    "npm:call-bind@1.0.8": {
      "call-bind-apply-helpers": "npm:call-bind-apply-helpers@1.0.2",
      "es-define-property": "npm:es-define-property@1.0.1",
      "get-intrinsic": "npm:get-intrinsic@1.3.1",
      "set-function-length": "npm:set-function-length@1.2.2"
    },
    "npm:call-bound@1.0.4": {
      "call-bind-apply-helpers": "npm:call-bind-apply-helpers@1.0.2",
      "get-intrinsic": "npm:get-intrinsic@1.3.1"
    },
    "npm:cipher-base@1.0.7": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.4",
      "safe-buffer": "npm:safe-buffer@5.2.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0",
      "to-buffer": "npm:to-buffer@1.2.2"
    },
    "npm:cliui@8.0.1": {
      "string-width": "npm:string-width@4.2.3",
      "strip-ansi": "npm:strip-ansi@6.0.1",
      "wrap-ansi": "npm:wrap-ansi@7.0.0"
    },
    "npm:color-convert@2.0.1": {
      "color-name": "npm:color-name@1.1.4"
    },
    "npm:core-js@1.2.7": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:core-js@2.3.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:core-js@3.46.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:core-util-is@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:create-ecdh@4.0.4": {
      "bn.js": "npm:bn.js@4.12.2",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "elliptic": "npm:elliptic@6.6.1"
    },
    "npm:create-hash@1.2.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "cipher-base": "npm:cipher-base@1.0.7",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "md5.js": "npm:md5.js@1.3.5",
      "ripemd160": "npm:ripemd160@2.0.3",
      "sha.js": "npm:sha.js@2.4.12"
    },
    "npm:create-hmac@1.1.7": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "cipher-base": "npm:cipher-base@1.0.7",
      "create-hash": "npm:create-hash@1.2.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "ripemd160": "npm:ripemd160@2.0.3",
      "safe-buffer": "npm:safe-buffer@5.2.1",
      "sha.js": "npm:sha.js@2.4.12"
    },
    "npm:crypto-browserify@3.12.1": {
      "browserify-cipher": "npm:browserify-cipher@1.0.1",
      "browserify-sign": "npm:browserify-sign@4.2.5",
      "create-ecdh": "npm:create-ecdh@4.0.4",
      "create-hash": "npm:create-hash@1.2.0",
      "create-hmac": "npm:create-hmac@1.1.7",
      "diffie-hellman": "npm:diffie-hellman@5.0.3",
      "hash-base": "npm:hash-base@3.0.5",
      "inherits": "npm:inherits@2.0.4",
      "pbkdf2": "npm:pbkdf2@3.1.5",
      "public-encrypt": "npm:public-encrypt@4.0.3",
      "randombytes": "npm:randombytes@2.1.0",
      "randomfill": "npm:randomfill@1.0.4"
    },
    "npm:define-data-property@1.1.4": {
      "es-define-property": "npm:es-define-property@1.0.1",
      "es-errors": "npm:es-errors@1.3.0",
      "gopd": "npm:gopd@1.2.0"
    },
    "npm:des.js@1.1.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.1"
    },
    "npm:devexpress-diagram@2.1.65": {
      "@devexpress/utils": "npm:@devexpress/utils@1.3.16",
      "es6-object-assign": "npm:es6-object-assign@1.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:devexpress-gantt@4.1.37": {
      "@devexpress/utils": "npm:@devexpress/utils@1.4.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2",
      "tslib": "npm:tslib@2.3.1"
    },
    "npm:devextreme-quill@1.5.20": {
      "core-js": "npm:core-js@3.46.0",
      "eventemitter3": "npm:eventemitter3@4.0.7",
      "lodash.clonedeep": "npm:lodash.clonedeep@4.5.0",
      "lodash.isequal": "npm:lodash.isequal@4.5.0",
      "lodash.merge": "npm:lodash.merge@4.6.2",
      "parchment": "npm:parchment@2.0.0-dev.2",
      "quill-delta": "npm:quill-delta@4.2.2"
    },
    "npm:devextreme-showdown@1.0.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2",
      "yargs": "npm:yargs@17.7.2"
    },
    "npm:devextreme@23.1.3": {
      "@babel/runtime": "npm:@babel/runtime@7.28.4",
      "@devextreme/runtime": "npm:@devextreme/runtime@3.0.11",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "devexpress-diagram": "npm:devexpress-diagram@2.1.65",
      "devexpress-gantt": "npm:devexpress-gantt@4.1.37",
      "devextreme-quill": "npm:devextreme-quill@1.5.20",
      "devextreme-showdown": "npm:devextreme-showdown@1.0.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inferno": "npm:inferno@7.4.11",
      "inferno-hydrate": "npm:inferno-hydrate@7.4.11",
      "jszip": "npm:jszip@3.1.3",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "rrule": "npm:rrule@2.6.6",
      "turndown": "npm:turndown@7.1.3"
    },
    "npm:diffie-hellman@5.0.3": {
      "bn.js": "npm:bn.js@4.12.2",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "miller-rabin": "npm:miller-rabin@4.0.1",
      "randombytes": "npm:randombytes@2.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:dunder-proto@1.0.1": {
      "call-bind-apply-helpers": "npm:call-bind-apply-helpers@1.0.2",
      "es-errors": "npm:es-errors@1.3.0",
      "gopd": "npm:gopd@1.2.0"
    },
    "npm:elliptic@6.6.1": {
      "bn.js": "npm:bn.js@4.12.2",
      "brorand": "npm:brorand@1.1.0",
      "hash.js": "npm:hash.js@1.1.7",
      "hmac-drbg": "npm:hmac-drbg@1.0.1",
      "inherits": "npm:inherits@2.0.4",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.1",
      "minimalistic-crypto-utils": "npm:minimalistic-crypto-utils@1.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:es-object-atoms@1.1.1": {
      "es-errors": "npm:es-errors@1.3.0"
    },
    "npm:es6-promise@3.0.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:escalade@3.2.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:evp_bytestokey@1.0.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "md5.js": "npm:md5.js@1.3.5",
      "safe-buffer": "npm:safe-buffer@5.2.1"
    },
    "npm:fast-diff@1.2.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:for-each@0.3.5": {
      "is-callable": "npm:is-callable@1.2.7"
    },
    "npm:get-intrinsic@1.3.1": {
      "async-function": "npm:async-function@1.0.0",
      "async-generator-function": "npm:async-generator-function@1.0.0",
      "call-bind-apply-helpers": "npm:call-bind-apply-helpers@1.0.2",
      "es-define-property": "npm:es-define-property@1.0.1",
      "es-errors": "npm:es-errors@1.3.0",
      "es-object-atoms": "npm:es-object-atoms@1.1.1",
      "function-bind": "npm:function-bind@1.1.2",
      "generator-function": "npm:generator-function@2.0.1",
      "get-proto": "npm:get-proto@1.0.1",
      "gopd": "npm:gopd@1.2.0",
      "has-symbols": "npm:has-symbols@1.1.0",
      "hasown": "npm:hasown@2.0.2",
      "math-intrinsics": "npm:math-intrinsics@1.1.0"
    },
    "npm:get-proto@1.0.1": {
      "dunder-proto": "npm:dunder-proto@1.0.1",
      "es-object-atoms": "npm:es-object-atoms@1.1.1"
    },
    "npm:has-property-descriptors@1.0.2": {
      "es-define-property": "npm:es-define-property@1.0.1"
    },
    "npm:has-tostringtag@1.0.2": {
      "has-symbols": "npm:has-symbols@1.1.0"
    },
    "npm:hash-base@3.0.5": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.4",
      "safe-buffer": "npm:safe-buffer@5.2.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:hash-base@3.1.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.4",
      "readable-stream": "npm:readable-stream@2.3.8",
      "safe-buffer": "npm:safe-buffer@5.2.1",
      "to-buffer": "npm:to-buffer@1.2.2"
    },
    "npm:hash.js@1.1.7": {
      "inherits": "npm:inherits@2.0.4",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.1"
    },
    "npm:hasown@2.0.2": {
      "function-bind": "npm:function-bind@1.1.2"
    },
    "npm:hmac-drbg@1.0.1": {
      "hash.js": "npm:hash.js@1.1.7",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.1",
      "minimalistic-crypto-utils": "npm:minimalistic-crypto-utils@1.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:immediate@3.0.6": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:inferno-create-element@7.4.11": {
      "inferno": "npm:inferno@7.4.11",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:inferno-hydrate@7.4.11": {
      "inferno": "npm:inferno@7.4.11",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:inferno-shared@7.4.11": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:inferno-vnode-flags@7.4.11": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:inferno@7.4.11": {
      "inferno-shared": "npm:inferno-shared@7.4.11",
      "inferno-vnode-flags": "npm:inferno-vnode-flags@7.4.11",
      "opencollective-postinstall": "npm:opencollective-postinstall@2.0.3",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:inherits@2.0.4": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:is-typed-array@1.1.15": {
      "which-typed-array": "npm:which-typed-array@1.1.19"
    },
    "npm:jszip@3.1.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-js": "npm:core-js@2.3.0",
      "es6-promise": "npm:es6-promise@3.0.2",
      "lie": "npm:lie@3.1.0",
      "pako": "npm:pako@1.0.4",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:lie@3.1.0": {
      "immediate": "npm:immediate@3.0.6",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:lodash.clonedeep@4.5.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:lodash.isequal@4.5.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:lodash.merge@4.6.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:luxon@1.28.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:md5.js@1.3.5": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "hash-base": "npm:hash-base@3.1.2",
      "inherits": "npm:inherits@2.0.1",
      "safe-buffer": "npm:safe-buffer@5.2.1"
    },
    "npm:miller-rabin@4.0.1": {
      "bn.js": "npm:bn.js@4.12.2",
      "brorand": "npm:brorand@1.1.0"
    },
    "npm:opencollective-postinstall@2.0.3": {
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:os-browserify@0.1.2": {
      "os": "github:jspm/nodelibs-os@0.1.0"
    },
    "npm:pako@1.0.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:parse-asn1@5.1.9": {
      "asn1.js": "npm:asn1.js@4.10.1",
      "browserify-aes": "npm:browserify-aes@1.2.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.3",
      "pbkdf2": "npm:pbkdf2@3.1.5",
      "safe-buffer": "npm:safe-buffer@5.2.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:pbkdf2@3.1.5": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.2.0",
      "create-hmac": "npm:create-hmac@1.1.7",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "ripemd160": "npm:ripemd160@2.0.3",
      "safe-buffer": "npm:safe-buffer@5.2.1",
      "sha.js": "npm:sha.js@2.4.12",
      "to-buffer": "npm:to-buffer@1.2.2"
    },
    "npm:process-nextick-args@2.0.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process@0.11.9": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:public-encrypt@4.0.3": {
      "bn.js": "npm:bn.js@4.12.2",
      "browserify-rsa": "npm:browserify-rsa@4.1.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.2.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "parse-asn1": "npm:parse-asn1@5.1.9",
      "randombytes": "npm:randombytes@2.1.0",
      "safe-buffer": "npm:safe-buffer@5.2.1"
    },
    "npm:quill-delta@4.2.2": {
      "fast-diff": "npm:fast-diff@1.2.0",
      "lodash.clonedeep": "npm:lodash.clonedeep@4.5.0",
      "lodash.isequal": "npm:lodash.isequal@4.5.0"
    },
    "npm:randombytes@2.1.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "safe-buffer": "npm:safe-buffer@5.2.1"
    },
    "npm:randomfill@1.0.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "randombytes": "npm:randombytes@2.1.0",
      "safe-buffer": "npm:safe-buffer@5.2.1"
    },
    "npm:readable-stream@1.1.14": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream-browserify": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "npm:readable-stream@2.3.8": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.4",
      "isarray": "npm:isarray@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "process-nextick-args": "npm:process-nextick-args@2.0.1",
      "safe-buffer": "npm:safe-buffer@5.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "string_decoder": "npm:string_decoder@1.1.1",
      "util-deprecate": "npm:util-deprecate@1.0.2"
    },
    "npm:require-directory@2.1.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:ripemd160@2.0.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "hash-base": "npm:hash-base@3.1.2",
      "inherits": "npm:inherits@2.0.4"
    },
    "npm:rrule@2.6.6": {
      "luxon": "npm:luxon@1.28.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "tslib": "npm:tslib@1.14.1"
    },
    "npm:safe-buffer@5.1.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:safe-buffer@5.2.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:set-function-length@1.2.2": {
      "define-data-property": "npm:define-data-property@1.1.4",
      "es-errors": "npm:es-errors@1.3.0",
      "function-bind": "npm:function-bind@1.1.2",
      "get-intrinsic": "npm:get-intrinsic@1.3.1",
      "gopd": "npm:gopd@1.2.0",
      "has-property-descriptors": "npm:has-property-descriptors@1.0.2"
    },
    "npm:sha.js@2.4.12": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.4",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "safe-buffer": "npm:safe-buffer@5.2.1",
      "to-buffer": "npm:to-buffer@1.2.2"
    },
    "npm:stream-browserify@1.0.0": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "readable-stream": "npm:readable-stream@1.1.14"
    },
    "npm:string-width@4.2.3": {
      "emoji-regex": "npm:emoji-regex@8.0.0",
      "is-fullwidth-code-point": "npm:is-fullwidth-code-point@3.0.0",
      "strip-ansi": "npm:strip-ansi@6.0.1"
    },
    "npm:string_decoder@0.10.31": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:string_decoder@1.1.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "safe-buffer": "npm:safe-buffer@5.1.2"
    },
    "npm:strip-ansi@6.0.1": {
      "ansi-regex": "npm:ansi-regex@5.0.1"
    },
    "npm:to-buffer@1.2.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "isarray": "npm:isarray@2.0.5",
      "safe-buffer": "npm:safe-buffer@5.2.1",
      "typed-array-buffer": "npm:typed-array-buffer@1.0.3"
    },
    "npm:turndown@7.1.3": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:typed-array-buffer@1.0.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "call-bound": "npm:call-bound@1.0.4",
      "es-errors": "npm:es-errors@1.3.0",
      "is-typed-array": "npm:is-typed-array@1.1.15"
    },
    "npm:util-deprecate@1.0.2": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:vm-browserify@0.0.4": {
      "indexof": "npm:indexof@0.0.1"
    },
    "npm:which-typed-array@1.1.19": {
      "available-typed-arrays": "npm:available-typed-arrays@1.0.7",
      "call-bind": "npm:call-bind@1.0.8",
      "call-bound": "npm:call-bound@1.0.4",
      "for-each": "npm:for-each@0.3.5",
      "get-proto": "npm:get-proto@1.0.1",
      "gopd": "npm:gopd@1.2.0",
      "has-tostringtag": "npm:has-tostringtag@1.0.2"
    },
    "npm:wrap-ansi@7.0.0": {
      "ansi-styles": "npm:ansi-styles@4.3.0",
      "string-width": "npm:string-width@4.2.3",
      "strip-ansi": "npm:strip-ansi@6.0.1"
    },
    "npm:yargs@17.7.2": {
      "cliui": "npm:cliui@8.0.1",
      "escalade": "npm:escalade@3.2.0",
      "get-caller-file": "npm:get-caller-file@2.0.5",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "require-directory": "npm:require-directory@2.1.1",
      "string-width": "npm:string-width@4.2.3",
      "y18n": "npm:y18n@5.0.8",
      "yargs-parser": "npm:yargs-parser@21.1.1"
    }
  }
});
