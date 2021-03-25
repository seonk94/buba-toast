const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "none",
    entry: "./src/index.js",
    output: {
        filename: "[name].js",
        path: path.resolve("./dist"),
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        })
    ]
}