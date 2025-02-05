const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

let mode = "development";
if (process.env.NODE_ENV === "production") {
  mode = "production";
}

const plugins = [
  new CopyPlugin({
    patterns: [
      {
        from: "./public",
        to: "./build",
        globOptions: {
          ignore: ["**/index.html"],
        },
      },
    ],
  }),
  new HtmlWebpackPlugin({
    template: "public/index.html",
  }),
];

module.exports = {
  mode,
  plugins,
  entry: "./src/main.js",
  output: {
    filename: "bundle.[contenthash].js",
    path: path.resolve(__dirname, "build"),
    clean: true,
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
};
