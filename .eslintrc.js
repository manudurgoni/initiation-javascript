module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module',
    allowImportExportEverywhere: true,
  },
  extends: ['prettier', 'prettier/standard', 'plugin:prettier/recommended'],
  plugins: ['prettier'],
  rules: {},
}
