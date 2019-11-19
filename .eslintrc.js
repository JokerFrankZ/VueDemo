module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential'], //这里面的'@vue/prettier'去掉即可关闭ESlint
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
