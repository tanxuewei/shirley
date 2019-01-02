const { join, resolve } = require('path')
const webpack = require('webpack')
console.log(__dirname)

module.exports = {
  entry: {
    app: './src/main.js'
  },
  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, './dist')
  }
}