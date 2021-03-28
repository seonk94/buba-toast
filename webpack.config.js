const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "none",
    entry: "./example/index.js",
    output: {
        filename: "[name].js",
        path: path.resolve("./dist"),
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./example/index.html"
        })
    ]
}