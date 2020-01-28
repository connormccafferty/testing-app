const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const OpenFinAdapter = require("hadouken-js-adapter");

module.exports = {
  entry: "./src/index.js",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      }
    ]
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"]
  },
  output: {
    path: __dirname + "/dist",
    publicPath: "/",
    filename: "bundle.js"
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    }),
    new CopyWebpackPlugin([{ from: "./src/assets", to: "assets" }])
  ],
  devServer: {
    contentBase: "./dist",
    hot: true,
    historyApiFallback: true,
    after: function(app, server) {
      let manifest = `http://localhost:${server.options.port}/assets/app.json`;
      console.log("Launching OpenFin App: ", manifest);
      OpenFinAdapter.launch({ manifestUrl: manifest });
    }
  }
};
