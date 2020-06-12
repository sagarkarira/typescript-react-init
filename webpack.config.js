const path = require("path");

// any files except from node_modules is transpiled by babel
const rules = [
  {
    test: /\.tsx?/,
    exclude: /node_modules/,
    loader: "babel-loader",
  },
];

module.exports = {
  target: "web", // web or native app or node
  mode: "development", // dev or prod env
  entry: "./src/index.tsx", // file path where part starts
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js", // name of the output single app file
  },
  module: { rules },
  // start or make bundle from following file extension types
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  // run dev server on the following port
  devServer: {
    contentBase: "./",
    port: 5000,
  },
};
