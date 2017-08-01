const path = require('path');
var webpack = require('webpack');
var LiveReloadPlugin = require('webpack-livereload-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: [
        'babel-polyfill', './src/ImageInformerCreator.js'
    ],
    output: {
        filename: 'ImageInformerCreator.js',
        library: 'ImageInformerCreator',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new LiveReloadPlugin({}),
        new CopyWebpackPlugin([{ from: 'src/pas-test.com.141665.js', to: 'pas-test.com.141665.js'}]),
        //new webpack.optimize.UglifyJsPlugin({
        //    compress: { warnings: false }
        //})
    ],
    module:{
        loaders: [
            {
                loader: "babel-loader",

                // Skip any files outside of your project's `src` directory
                include: [
                    path.resolve(__dirname, "src"),
                ],

                // Only run `.js` and `.jsx` files through Babel
                test: /\.jsx?$/,

                // Options to configure babel with
                query: {
                    plugins: ['transform-runtime'],
                    presets: ['es2015', 'stage-0'],
                }
            },
        ]
    }

}