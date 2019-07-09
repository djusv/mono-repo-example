const path = require('path');
const baseJestConfig = require('shared-configs/base-jest-config');

module.exports = baseJestConfig(path.basename(__dirname));
