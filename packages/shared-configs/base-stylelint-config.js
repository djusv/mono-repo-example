module.exports = {
  extends: ['stylelint-config-recommended'],
  plugins: [
    'stylelint-no-unsupported-browser-features'
  ],
  rules: {
    'no-duplicate-at-import-rules': true,
    'plugin/no-unsupported-browser-features': [true, {
      'severity': 'warning'
    }]
  }
};
