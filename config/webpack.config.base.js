const path = require('path');
// 引入插件
const HTMLWebpackPlugin = require('html-webpack-plugin');

// 抽取 css
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
// 引入多页面文件列表
const config = require('./config');
// 通过 html-webpack-plugin 生成的 HTML 集合
const HTMLPlugins = [];
// 入口文件集合
const Entries = {};

// 生成多页面的集合
config.HTMLDirs.forEach((page) => {
  const htmlPlugin = new HTMLWebpackPlugin({
    filename: `${page}.html`,
    template: path.resolve(__dirname, `../src/${page}.html`),
    chunks: [page, 'commons'],
  });
  HTMLPlugins.push(htmlPlugin);
  Entries[page] = path.resolve(__dirname, `../src/${page}.js`);
});

console.log(Entries);
module.exports = {
  entry: Entries,
  devtool: 'cheap-module-source-map',
  output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname, '../dist'),
    libraryTarget: 'umd', // umd模式打包
  },
  // 加载器
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['env'],
            },
          },
          {
            loader: 'eslint-loader',
            options: {
              // 启用警告信息
              emitWarning: true,
              // 启用自动修复
              fix: true,
            },
          },
        ],
      },
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader',
          options: {},
        },
      },
    ],
  },
  plugins: [
    // 将 css 抽取到某个文件夹
    new ExtractTextPlugin(config.cssOutputPath),
    // 自动生成 HTML 插件
    ...HTMLPlugins,
  ],
};
