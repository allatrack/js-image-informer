const path = require('path');
var webpack = require('webpack');
var LiveReloadPlugin = require('webpack-livereload-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: [
        './src/polyfills/polyfill.ClassList.js',
        './src/polyfills/polyfill.includes.js',
        './src/polyfills/polyfill.indexOf.js',
        './src/index.js',
    ],
    output: {

        filename: 'media.sticky.widget.js',
        library: 'stickyWidgetLib',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new LiveReloadPlugin({}),
        new CopyWebpackPlugin([{ from: 'src/pas-test.com.144902.js', to: 'pas-test.com.144902.js'}]),
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
                test: /\.js?$/,

                // Options to configure babel with
                query: {
                    plugins: ['transform-runtime'],
                    presets: ['es2015'],
                }
            },
        ]
    }

}