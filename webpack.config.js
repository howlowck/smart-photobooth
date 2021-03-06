const path = require('path')
const webpack = require('webpack')

module.exports = {
  context: path.resolve(__dirname, './src'),
  entry: {
    app: './app.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: [{
          loader: 'babel-loader',
          options: { presets: ['es2015'] }
        }],
      },
    ],
  },
  output: {
      path: path.resolve(__dirname, './dist/assets'),
      filename: '[name].bundle.js',
      publicPath: '/assets'
  },
  devServer: {
    contentBase: path.resolve(__dirname, './src'),  
  }
};
