const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {
  VueLoaderPlugin
} = require('vue-loader')

const ROOT = process.cwd()
const ENTRY = path.resolve(ROOT, './src')
const OUTPUT = path.resolve(ROOT, './dist')

module.exports = {
  entry: path.resolve(ENTRY, 'main.js'),
  output: {
    filename: '[name].js',
    path: OUTPUT,
    publicPath: './'
  },
  resolve: {
    extensions: [
      '.js',
      '.vue',
      '.css',
      '.json'
    ],
    alias: {
      vue$: 'vue/dist/vue.esm.js'
    }
  },
  module: {
    rules: [{
      test: /\.vue$/,
      loader: 'vue-loader'
    }, {
      test: /\.js$/,
      loader: 'babel-loader'
    }, {
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader'
      ]
    }, {
      test: /\.less$/,
      use: ['style-loader', 'css-loader', 'less-loader']
    }, {
      test: /\.(jpg|png|gif|jpeg|bmp$)/i,
      exclude: /node_modules/,
      use: [{
        loader: 'url-loader',
        options: {
          limit: 1024,
          name: '[name].[ext]'
        }
      }]
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(ENTRY, './index.html'),
      filename: 'index.html',
      inject: true
    }),
    new VueLoaderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
}
