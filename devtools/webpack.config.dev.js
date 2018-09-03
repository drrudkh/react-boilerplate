const webpack = require("webpack");
const path = require("path");

module.exports = config => ({
  mode: "development",
  plugins: [
    new webpack.HashedModuleIdsPlugin(),
    new webpack.WatchIgnorePlugin([/scss\.d\.ts$/])
  ],
  optimization: {
    runtimeChunk: "single",
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all"
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        exclude: path.resolve(path.join(process.cwd(), "src/scss")),
        use: [
          "style-loader",
          {
            loader: "typings-for-css-modules-loader",
            options: {
              modules: true,
              namedExport: true,
              camelCase: true,
              localIdentName: "[name]__[local]___[hash:base64:5]"
            }
          },
          "sass-loader"
        ]
      }
    ]
  }
});
