const path = require('path');
module.exports = {
    module: {
        rules: [
            {
                test: /\.scss$/,
                loader: ['style-loader', 'css-loader', 'sass-loader'],
                include: path.resolve(__dirname, '../')
            }
        ]
    }
}