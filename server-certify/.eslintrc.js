module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "amd":false,
        "node" : true,
        "jquery" : true
    },
    "extends": [
        "eslint:recommended",
        "plugin:vue/essential"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module",
        "object-shorthand": ["error", "never"]
    },
    "plugins": [
        "vue"
    ],
    "rules": {
    }
};