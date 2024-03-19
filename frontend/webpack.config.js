// configuration for webpack to bundle the angular application

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/app/app.module.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.bundle.js'
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    mode: 'production',
    module: {
        rules: [
            { test: /\.ts$/, use: 'ts-loader' },
            { test: /\.html$/, use: 'html-loader' },
            { test: /\.css$/, use: ['style-loader', 'css-loader'] }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
    },
    stats:{
        errorDetails: true
    }
};
