module.exports = {
  env: {
    browser: true,
    es6: true
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    allowImportExportEverywhere: true,
    parser: 'babel-eslint'
  },
  extends: 'plugin:vue/essential',
  // extends: 'plugin:vue/vue3-recommended',
  // extends: 'airbnb',
  // extends: 'eslint:recommended',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  plugins: ['vue'],
  rules: {
    'vue/multi-word-component-names': 'off'
  }
};
