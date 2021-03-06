'use strict';
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    mode: process.env.NODE_ENV || "development",
    // Add source map support
    devtool: "#cheap-source-map",
    entry: "./public/js/entry.js",
    output: {
        path: __dirname,
        filename: "./public/js/bundle.js"
    },
    resolve: {
        extensions: ['.js', '.marko'],
        modules: ['./', 'node_modules']
    },
    module: {
        rules: [
            {
                test: /\.marko$/,
                loader: 'marko-loader'
            },
            {
                test: /\.(less|css)$/,
                loader: ExtractTextPlugin.extract({ fallback: 'style-loader?sourceMap', use: 'css-loader?sourceMap!less-loader' })
            },
            {
                test: /\.svg/,
                loader: 'svg-url-loader'
            },
            {
                test: /\.(jpg|jpeg|gif|png)$/,
                loader: 'file-loader',
                query: {
                    name: './public/images/[hash].[ext]',
                    publicPath: '/'
                }
            }
        ]
    },
    plugins: [
        // Avoid publishing files when compilation failed:
        new webpack.NoEmitOnErrorsPlugin(),

        // Write out CSS bundle to its own file:
        new ExtractTextPlugin({ filename: './public/css/bundle.css', allChunks: true })
    ]
};