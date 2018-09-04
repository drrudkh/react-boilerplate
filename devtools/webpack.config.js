const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");

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

module.exports = config => {
  const CONFIG = {
    environment: config && config.environment ? config.environment : "dev",
    devtool: config && config.environment ? "none" : "eval-source-map"
  };
  return merge(
    {
      devtool: CONFIG.devtool,
      entry: {
        app: [path.join(process.cwd(), "src/main.tsx")]
      },
      output: {
        path: path.resolve("dist"),
        filename: "[name].[contenthash].js"
      },
      resolve: {
        alias: {
          "@components": path.resolve(
            path.join(process.cwd(), "src/components")
          ),
          "@images": path.resolve(path.join(process.cwd(), "src/assets/images"))
        },
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
            test: /\.scss$/,
            include: path.resolve(path.join(process.cwd(), "src/scss")),
            use: ExtractTextWebpackPlugin.extract(["css-loader", "sass-loader"])
          },
          {
            test: /\.(png|jpg|svg)$/,
            use: [
              {
                loader: "file-loader",
                options: {
                  limit: 8000, // Convert images < 8kb to base64 strings
                  name: "images/[hash]-[name].[ext]"
                }
              }
            ]
          }
        ]
      }
    },
    require(`./webpack.config.${CONFIG.environment}`)(CONFIG)
  );
};
