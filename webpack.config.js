const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const tree = require("./dir-tree");
// const ExtraWatchWebpackPlugin = require("extra-watch-webpack-plugin");

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
    port: 8001,
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
    new webpack.DefinePlugin({
      __TREE__: webpack.DefinePlugin.runtimeValue(() => JSON.stringify(tree), {
        fileDependencies: [path.resolve(__dirname, "./dir-tree.js")],
      }),
    }),
    // new ExtraWatchWebpackPlugin({
    //   files: ["demo/**/*/*.txt"],
    //   dirs: [path.resolve(__dirname, "./demo")],
    // }),
    // {
    //   apply: (compiler) => {
    //     compiler.hooks.compile.tap("beforeRun", () => {
    //       console.log("before build");
    //     });
    //   },
    // },
  ],
};
