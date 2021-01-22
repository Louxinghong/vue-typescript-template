module.exports = {
  root: true,
  env: {
    node: true
  },
  globals: {
    saveAs: true
  },
  extends: [
    'prettier',
    'prettier/@typescript-eslint',
    'plugin:vue/essential',
    '@vue/typescript'
  ],
  rules: {
    'space-before-function-paren': [0, 'always'] // 函数定义时括号前面要不要有空格
  },
  parserOptions: {
    parser: '@typescript-eslint/parser'
  }
}
