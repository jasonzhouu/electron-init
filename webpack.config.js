var path = require('path')
const nodeExternals = require("webpack-node-externals");

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    externals: [nodeExternals()]
}