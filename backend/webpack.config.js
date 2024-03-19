const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
    entry: {
        main: './src/server.ts'
    },
    output: {
        path: path.resolve(__dirname, 'dev-prod'),
        publicPath: '/',
        filename: 'app.js',
        clean: true
    },
    target: 'node',
    mode: 'production',
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin({
            terserOptions: {
                compress: {
                    drop_console: false,
                },
            }
        })],
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: 'ts-loader',
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    plugins: [
        new Dotenv({
            path: path.resolve(__dirname, 'src', '.env'), 
        }),
    ],
};
