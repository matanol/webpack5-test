const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const BUILD_PATH = path.resolve(__dirname, "./dist");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.[contenthash].js",
    path: BUILD_PATH,
    publicPath: "",
  },
  mode: "development",
  devServer: {
    port: 8000,
    static: {
      directory: BUILD_PATH,
    },
    devMiddleware: {
      index: "index.html",
    },
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg)$/,
        type: "asset/resource",
      },
      {
        test: /\.(json)$/,
        type: "asset/source",
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
  ],
};
