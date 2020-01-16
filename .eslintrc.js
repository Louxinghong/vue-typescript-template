module.exports = {
  root: true,
  env: {
    node: true
  },
  globals: {
    saveAs: true
  },
  extends: ['plugin:vue/essential', '@vue/standard', '@vue/typescript'],
  rules: {},
  parserOptions: {
    parser: '@typescript-eslint/parser'
  }
}
