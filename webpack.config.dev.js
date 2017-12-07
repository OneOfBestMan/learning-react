const path = require('path')

module.exports = {
  // what the bundle will contain
  entry: './src/app/index.js',
  // where the bundle will be located
  output: {
    path: path.resolve('build/assets'),
    filename: 'bundle.js'
  },
  // how the bundle is built (transpiling js, etc)
  module: {
    loaders: [{
      test : /\.js?/,
      include : path.resolve('./src/app'),
      loader : 'babel-loader',
      exclude: /node_modules/
    }]
  },
  plugins: []
}
