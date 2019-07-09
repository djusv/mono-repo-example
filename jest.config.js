module.exports = {
  name: 'mono-repo-example-jest-config',
  globals: {
    PRODUCTION: false
  },
  reporters: [
    'default',
    ['jest-junit', { 'outputDirectory': '<rootDir>/coverage' }]
  ],
  collectCoverageFrom: [
    '**/src/js/**/*.js'
  ],
  coveragePathIgnorePatterns: [
    '(coverage|dist|node_modules)'
  ],
  transform: {
    '^.+\\.(js)$': 'babel-jest',
    '^.+\\.html?$': 'html-loader-jest',
    '^.+\\.xml$': '<rootDir>/packages/shared-configs/__mocks__/rawFileLoader.js'

  },
  setupFilesAfterEnv: [
    '<rootDir>/setupTests.js'
  ],
  moduleNameMapper: {
    '.(jpg|jpeg|png|gif|svg)$': '<rootDir>/packages/shared-configs/__mocks__/fileMock.js'
  }
}
