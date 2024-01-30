module.exports = {
  root: true,
  parserOptions: {
    parser: '@babel/eslint-parser',
    sourceType: 'module'
  },
  extends: [
    '@nuxtjs'
  ],
  rules: {
    'no-undef': 0,
    'no-console': 0
  }
}
