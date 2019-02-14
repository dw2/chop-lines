module.exports = {
  presets: [
    "@babel/react",
    "@babel/typescript",
    ["@babel/env", { "modules": false }],
  ],
  plugins: [
    "react-hot-loader/babel",
    "babel-plugin-styled-components",
    "@babel/plugin-proposal-object-rest-spread",
    "@babel/plugin-proposal-class-properties",
    ["@babel/plugin-proposal-decorators", { legacy: true }]
  ],
};
