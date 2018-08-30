const path = require("path");
const webpack = require("webpack");

// PLUGINS

const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextWebpackPlugin = require("extract-text-webpack-plugin");

// METADATA

const METADATA = {
  title: "React Boilerplate",
  author: "Apostol Tudor",
  description: "Lorem Ipsum"
};

// CONFIG

module.exports = {
  mode: "development",
  devtool: "eval-source-map",
  entry: [path.join(process.cwd(), "src/main.tsx")],
  output: {
    path: path.resolve("dist"),
    filename: "[name].[chunkhash].js"
  },
  resolve: {
    extensions: [".js", ".json", ".ts", ".tsx"]
  },
  devServer: {
    stats: "minimal"
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: METADATA.title,
      author: METADATA.author,
      template: path.join(process.cwd(), "src/index.ejs"),
      inject: "body"
    }),

    new ExtractTextWebpackPlugin({
      filename: "style.css",
      allChunks: true
    })
  ],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: "awesome-typescript-loader"
      },
      {
        test: /\.css$/,
        use: ExtractTextWebpackPlugin.extract({
          fallback: "style-loader",
          use:
            'css-loader?modules,localIdentName="[name]-[local]-[hash:base64:6]"'
        })
      }
    ]
  }
};
