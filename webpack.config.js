const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');  // Ensure you import webpack

module.exports = {
  entry: "./client/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
  },
  mode: "development",
  devtool: "eval-source-map",
  devServer: {
    host: "localhost",
    port: 8080,
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    open: true,
    historyApiFallback: true, // Important for SPA routing
    headers: { "Access-Control-Allow-Origin": "*" },
    liveReload: false,
    hot: false,
    proxy: [
      {
        context: ["/api"],
        target: "http://localhost:8888", // Updated to match the backend server port
        secure: false,
        changeOrigin: true,
      },
    ],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: {
          loader: "url-loader",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./client/index.html",
    }),
    new webpack.DefinePlugin({
      'process.env.REACT_APP_BACKEND_URL': JSON.stringify(process.env.REACT_APP_BACKEND_URL),
      'process.env.REACT_APP_FRONTEND_URL': JSON.stringify(process.env.REACT_APP_FRONTEND_URL),
      'process.env.REACT_APP_SERVER_IP_1': JSON.stringify(process.env.REACT_APP_SERVER_IP_1),
      'process.env.REACT_APP_SERVER_IP_2': JSON.stringify(process.env.REACT_APP_SERVER_IP_2),
      'process.env.REACT_APP_SERVER_IP_3': JSON.stringify(process.env.REACT_APP_SERVER_IP_3),
    }),
  ],
  resolve: {
    extensions: [".js", ".jsx"],
  },
};
