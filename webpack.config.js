const path = require('path');

module.exports = {
    mode:'development',
    entry: './src/js/index.js',
    output: {
        path: path.resolve(__dirname, 'docs/common/js'),
        filename:'index.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                        ]
                    }
                }
            }
        ]
    },
    target: ["web", "es5"],
}