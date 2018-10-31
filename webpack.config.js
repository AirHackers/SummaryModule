const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'client', 'src', 'index.jsx'),
  output: {
    path: path.resolve(__dirname, 'public', 'dist'),
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.m?jsx$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  },
  mode: 'development'
};
