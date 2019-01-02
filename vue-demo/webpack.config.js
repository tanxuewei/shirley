const { join, resolve } = require('path')
const webpack = require('webpack')
const { VueLoaderPlugin } = require('vue-loader')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
var HtmlwebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    app: './src/main.js'
  },
  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, './dist')
  },
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src')
    }
  },
  devtool: process.env.NODE_ENV !== 'production' ? 'eval-source-map' : false,
  watch: process.env.NODE_ENV !== 'production',
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }, {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }, {
        test: /\.(le|c)ss$/,
        use: [ 'style-loader', 'css-loader', 'less-loader']
      },
      // 图片资源
      {
        test: /\.(jpeg|jpg|png|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10240,
            name: 'images/[name]-[hash:8].[ext]'
          }
        }
      },
      // 字体资源等
      {
        test: /\.(ttf|woff|woff|eot|svg)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10240,
            name: 'font/[name]-[hash:8].[ext]'
          }
        }
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    // new UglifyJsPlugin()
    new HtmlwebpackPlugin({
      title: 'vuevuevue',
      filename: 'index.html',
      template: 'index.html',
      inject: true
    })
  ]
}