const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const baseConfig = require('./webpack.base.js');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
module.exports = merge(baseConfig, {
  mode: 'production',
  output: {
    clean: true,
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new CopyWebpackPlugin({
      // from后的路径是相对于项目的根目录，to后的路径是相对于打包后的dist目录
      patterns: [
        {
          from: path.resolve(__dirname, '../src/public'),
          to: path.resolve(__dirname, '../dist/public'),
        },
      ],
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'disabled',
      generateStatsFile: true,
    }),
  ],
});
