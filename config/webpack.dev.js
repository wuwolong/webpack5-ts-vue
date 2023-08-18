/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { merge } = require('webpack-merge')

const baseConfig = require('./webpack.base.js')
const ESLintPlugin = require('eslint-webpack-plugin')
// const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
module.exports = merge(baseConfig, {
  mode: 'development',
  target: 'web',
  plugins: [new ESLintPlugin({ extensions: ['js', 'ts', 'vue'] })],
  devServer: {
    hot: true,
    open: true,
  },
})
