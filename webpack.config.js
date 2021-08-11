const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");

const srcPath = path.resolve(__dirname, "./src");
const distPath = path.resolve(__dirname, "./dist");

module.exports = (env) => ({
  entry: path.resolve(srcPath, "./App.jsx"),
  output: {
    filename: "js/[name].bundle.js",
    path: distPath,
    publicPath: "/",
  },
  target: "web",
  devtool: env.mode === "dev" ? "source-map" : false,
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.(scss|sass)$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpg|gif|woff|woff2|svg)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[folder]/[name].[ext]",
              outputPath: "assets/",
              publicPath: "/assets/",
            },
          },
        ],
      },
    ],
  },
  optimization: {
    minimize: true,
  },
  resolve: {
    alias: {
      components: path.resolve(srcPath, "js/components/"),
      pages: path.resolve(srcPath, "js/pages/"),
      fonts: path.resolve(srcPath, "assets/fonts/"),
      variables: path.resolve(srcPath, "scss/variables.scss"),
      images: path.resolve(srcPath, "assets/images"),
      data: path.resolve(srcPath, "data/"),
      icons: path.resolve(srcPath, "assets/icons"),
    },
    extensions: [".js", ".jsx"],
  },
  plugins: [
    new CleanWebpackPlugin({ verbose: true }),
    new MiniCssExtractPlugin({ filename: "css/[name].css" }),
    new HtmlWebpackPlugin({
      template: path.resolve(srcPath, "index.html"),
      filename: "index.html",
      inject: "body",
    }),
    new FaviconsWebpackPlugin(path.resolve(srcPath, "./assets/icons/mylogo.svg")),
  ],

  devServer: {
    open: true,
    contentBase: distPath,
    writeToDisk: true,
    port: 8081,
    historyApiFallback: true,
  },
});
