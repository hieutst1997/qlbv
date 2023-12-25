module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:vue/vue3-essential"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "vue"
    ],
    "rules": {
        'vue/component-definition-name-casing': 'off',
        'vue/multi-word-component-names': 'off',
        'vue/no-reserved-component-names': 'off',
        'vue/no-useless-catch': 'off',
        'no-useless-catch': 'off',
    }
}
