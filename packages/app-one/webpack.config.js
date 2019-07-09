const webpackBaseConfig = require('shared-configs/base-webpack-config');
const projectName = require('./package.json').name;

module.exports = webpackBaseConfig(__dirname, projectName);
