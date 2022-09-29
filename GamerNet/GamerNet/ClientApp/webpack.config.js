const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plagin')
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].[hash].js"
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: "./public/index.html" 
        }),
        new CleanWebpackPlugin()
    ]
}