const path = require('path');
const webpack = require('webpack');

const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const StylelintBarePlugin = require('stylelint-bare-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

var ENV = (process.env.NODE_ENV || '').toLowerCase();
var isProd = ENV.startsWith('prod');
var isDev = ENV.startsWith('dev');
var isTest = ENV.startsWith('test');

module.exports = function(projectDir, projectName) {
  return {
    mode: isProd ? 'production' : 'development',
    devtool: isProd ? false : 'cheap-module-source-map',
    externals: ['angular'],
    output: {
      path: isProd ? path.resolve(`../../dist/${projectName}`) : path.resolve(projectDir, 'dist'),
      filename: isProd ? '[name].[chunkhash:8].js' : '[name].bundle.js'
    },
    performance: {
      hints: isProd ? false : 'warning'
    },
    stats: 'normal',
    optimization: {
      noEmitOnErrors: isProd,
      splitChunks: {
        chunks: 'all'
      }
    },
    resolve: {
      alias: {
        images: path.resolve(projectDir, 'src/assets/images')
      }
    },
    module: {
      rules: [{
          test: /\.html$/,
          use: [{
            loader: 'html-loader',
            options: {
              minimize: isProd
            }
          }]
        }, {
          test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)/i,
          use: [{
            loader: 'file-loader',
            options: {
              outputPath: 'assets',
              name: '[hash:12].[ext]'
            }
          }]
        }, {
          test: /\.(scss|sass)$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
        }, {
          enforce: 'pre',
          test: /\.js$/,
          include: [
            path.resolve(projectDir, 'src'),
            /ui-common/,
            /api-common/
          ],
          exclude: /node_modules/,
          use: [{
            loader: 'eslint-loader',
            options: {
              failOnWarning: false,
              failOnError: true,
              rules: {
                'no-debugger': isProd ? 2 : 1,
                'no-console': isProd ? 2 : 1,
                'angular/log': isProd ? 2 : 1
              }
            }
          }]
        }, {
          test: /\.js$/,
          include: [
            path.resolve(projectDir, 'src'),
            /ui-common/,
            /api-common/,
            /fast-xml-parser/
          ],
          use: [{
            loader: 'babel-loader',
            options: {
              rootMode: 'upward'
            }
          }]
        }
      ]
    },
    plugins: [
      new webpack.DefinePlugin({
        'PRODUCTION': JSON.stringify(isProd),
        'DEVELOPMENT': JSON.stringify(isDev),
        'TEST': JSON.stringify(isTest)
      }),
      new CleanWebpackPlugin(),
      new HtmlWebPackPlugin({
        template: 'src/index.html',
        filename: './index.html'
      }),
      new MiniCssExtractPlugin({
        filename: isProd ? '[name].[contenthash:8].css' : '[name].bundle.css'
      }),
      new StylelintBarePlugin({
        files: ['src/**/*.s?(a|c)ss']
      }),
      new OptimizeCssAssetsPlugin()
    ]
  };
};
