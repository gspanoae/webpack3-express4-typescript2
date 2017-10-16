//const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
var ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin'); //installed via npm
const webpack = require('webpack'); //to access built-in plugins

const path = require('path');

module.exports = {
  entry: './src/index.ts',
  target: 'node',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
      // Add `.ts` and `.tsx` as a resolvable extension.
      extensions: ['.ts', '.tsx', '.js'] // note if using webpack 1 you'd also need a '' in the array as well
  },
  module: {
    rules: [
      {
        test: /\.txt$/,
        use: 'raw-loader'
      },
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: { transpileOnly: true }
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new ForkTsCheckerWebpackPlugin({ checkSyntacticErrors: true })
    //new HtmlWebpackPlugin({template: './src/index.html'})
  ]
};
