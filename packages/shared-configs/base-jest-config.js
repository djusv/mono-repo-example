module.exports = function(packageName) {
  return {
    name: packageName,
    globals: {
      PRODUCTION: false
    },
    rootDir: '../..',
    coverageDirectory: `<rootDir>/packages/${packageName}/coverage`,
    roots: [
      `<rootDir>/packages/${packageName}`
    ],
    collectCoverageFrom: [
      `**/${packageName}/src/js/**/*.js`
    ],
    coveragePathIgnorePatterns: [
      '(coverage|dist|node_modules)'
    ],
    transform: {
      '^.+\\.(js)$': '<rootDir>/node_modules/shared-configs/jestBabelTransform.js',
      '^.+\\.html?$': 'html-loader-jest',
      '^.+\\.xml$': '<rootDir>/packages/shared-configs/__mocks__/rawFileLoader.js'
    },
    setupFilesAfterEnv: [
      '<rootDir>/setupTests.js'
    ],
    moduleNameMapper: {
      '.(jpg|jpeg|png|gif|svg)$': '<rootDir>/node_modules/shared-configs/__mocks__/fileMock.js'
    }
  };
};
