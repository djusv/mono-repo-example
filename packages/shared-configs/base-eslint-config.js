module.exports = {
  'plugins': [
    'angular',
    'jest'
  ],
  'extends': [
    'plugin:angular/johnpapa',
    'eslint:recommended',
    'plugin:compat/recommended',
    'plugin:jest/recommended'
  ],
  'parser': 'babel-eslint',
  'parserOptions': {
    'sourceType': 'module'
  },
  'env': {
    'browser': true,
    'es6': true,
    'node': false,
    'commonjs': true
  },
  'globals': {
    'PRODUCTION': false,
    'DEVELOPMENT': false,
    'TEST': false,
    'inject': false,
    'angular': true
  },
  'rules': {
    "angular/document-service": 0,
    "angular/file-name": 0,
    'angular/no-angular-mock': 0
  }
};
