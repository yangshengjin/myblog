module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true
  },
  extends: 'standard',
  parserOptions: {
    sourceType: 'module'
  },
  globals: {
    describe: true,
    beforeEach: true,
    afterEach: true,
    it: true
  },
  rules: {}
}
