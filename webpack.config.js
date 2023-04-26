const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  target: "node",
  mode: "development", // or 'production' for a production build
  entry: "./app.js", // your main application file
  output: {
    path: path.resolve(__dirname, "dist"), // where to output the build files
    filename: "bundle.js", // the name of the bundled JavaScript file
  },
  module: {
    rules: [
      {
        test: /\.jade$/, // process all jade files
        use: [
          {
            loader: "pug-loader", // use the pug-loader to compile jade to HTML
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./views/index.jade", // the jade file to use as the main template
      filename: "index.html", // the name of the output HTML file
    }),
  ],
};
