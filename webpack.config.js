var path = require('path');

module.exports = {
    entry: "./frontend/widgets.jsx",
    output: {
        path: path.resolve(__dirname, 'app', 'assets', 'javascript'),
    },
    module: {
        rules: [{
            test: [/\.jsx?$/],
            exclude: /(node_modules)/,
            use: {
                loader: 'babel-loader',
                query: {
                    presets: ['@babel/env', '@babel/react']
                }
            },
        }]
    },
    devtool: 'source-map',
    resolve: {
        extensions: [',js', '.jsx', '*']
    },
};