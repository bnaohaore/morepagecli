var path = require('path');
var utils = require('./utils');
var config = require('../config');
var vueLoaderConfig = require('./vue-loader.conf');
const yargs = require("yargs");
var api_url='';
var yargs_option=  yargs.argv.api_option;

 if(yargs_option=='dev'){

   api_url=path.resolve(__dirname, '../src/api_js/api-dev.js')

 } else if(yargs_option=='pro'){

  api_url=path.resolve(__dirname, '../src/api_js/api-pro.js')

 } else if(yargs_option=='local'){

   api_url=path.resolve(__dirname, '../src/api_js/api-local.js')

 } else {

   api_url=path.resolve(__dirname, '../src/api_js/api-local.js')

 }

function resolve (dir) {
  return path.join(__dirname, '..',dir)
}


module.exports = {
  entry: {
    app: './src/main.js'
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    extensions:['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
      apists:api_url
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  }
};
