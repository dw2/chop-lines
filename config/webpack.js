const path = require("path");

module.exports = {
  entry: [
    "react-hot-loader/patch",
    path.join(__dirname, "../src/chop-lines.tsx")
  ],
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "index.js",
    library: "chop-lines",
    libraryTarget: "umd",
    publicPath: "dist/",
    umdNamedDefine: true
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
    alias: {
      react: path.resolve(__dirname, "../node_modules/react"),
      "react-dom": path.resolve(__dirname, "../node_modules/react-dom")
    }
  },
  externals: {
    react: {
      commonjs: "react",
      commonjs2: "react",
      amd: "React",
      root: "React"
    },
    "react-dom": {
      commonjs: "react-dom",
      commonjs2: "react-dom",
      amd: "ReactDOM",
      root: "ReactDOM"
    }
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        loaders: ["babel-loader"]
      },
      {
        test: /\.[jt]sx?$/,
        loader: "babel-loader"
      },
      {
        test: /\.[jt]sx?$/,
        use: ["source-map-loader"],
        enforce: "pre"
      }
    ]
  }
};
