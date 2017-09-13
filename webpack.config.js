const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/index.js",

    output: {
        path: path.resolve(__dirname, "./"),
        filename: 'bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                include: [
                    path.resolve(__dirname, "src")
                ],
                enforce: "pre",
                enforce: "post",

                loader: "babel-loader",

                options: {
                    presets: ["es2015", "react"]
                }
            },
            {
                test: /\.scss$/,
                use: [
                 {
                     loader: 'style-loader'
                 },
                 {
                     loader: 'css-loader'
                 },
                 {
                     loader: 'sass-loader'
                 }
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },

    resolve: {
        modules: [
            "node_modules",
            path.resolve(__dirname, "src")
        ],
        extensions: [".js", ".json", ".jsx", ".css"]
    },

    devtool: "source-map",

    context: __dirname,

    target: "web",

    devServer: {
        historyApiFallback: true,
        contentBase: './src'
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html'
        })
    ],

    node: {
        console: true,
        net: 'empty',
        tls: 'empty',
        dns: 'empty'
    }

};