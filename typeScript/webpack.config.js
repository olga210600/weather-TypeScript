const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const jsLoaders = () => {
    const loaders = [
        {
            loader: 'babel-loader',
            options: {
                presets: [
                    '@babel/preset-typescript',
                    ['@babel/preset-env', { modules: false }],
                ],
            },
        },
    ];

    return loaders;
};

module.exports = {
    entry: ['@babel/polyfill', './src/index.ts'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    devServer: {
        static: './dist',
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(js|jsx|tsx|ts)$/,
                exclude: /node_modules/,
                use: jsLoaders(),
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            [
                                '@babel/preset-env',
                                {
                                    targets: {
                                        esmodules: true,
                                    },
                                },
                            ],
                        ],
                        plugins: ['@babel/plugin-proposal-class-properties']
                    }
                }
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({template: './src/index.html'}),
    ],
};

