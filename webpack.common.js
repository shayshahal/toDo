const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: "./src/DOM/index/index.js",
  output: {
    filename: "index.js",
    chunkFilename: '[name].js',
    path: path.resolve(__dirname, "dist"),
    clean: true,  
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "To-Do",
      template: "/src/DOM/index/index.html"
    }),
  ],
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
      
    ],
  },
};
