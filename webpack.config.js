const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')


module.exports = {
    entry: {
        index: './src/js/index.js'
    },
    output: {
        filename: 'js/[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/[name].css'
        })
    ],

    module: {
        rules: [{
            test: /\.(css|less)$/,
            use: [{
                loader: MiniCssExtractPlugin.loader
            }, {
                loader: "css-loader"
            }, {
                loader: "less-loader"
            },]
        },
        { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
        ]
    },

    watch: true,
    // 配置监听的文件变化
    watchOptions: {
        ignored: /node_modules/,
        aggregateTimeout: 300,
        poll: 1000,
    },
};