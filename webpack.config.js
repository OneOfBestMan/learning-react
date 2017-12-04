const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  // what the bundle will contain
  entry: './app/index.js',
  // where the bundle will be located
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js'
  },
  // how the bundle is built (transpiling js, etc)
  module: {
    loaders: [{
      test : /\.js?/,
      include : path.resolve('./app'),
      loader : 'babel-loader',
      exclude: /node_modules/
    }]
  },
  plugins: [new HtmlWebpackPlugin({
    template: './index.html',
    filename: 'index.html',
    inject: 'body'
  })]
}
