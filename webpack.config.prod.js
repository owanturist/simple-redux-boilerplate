const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const nested = require('postcss-nested');
const assets = require('postcss-assets');
const cssShort = require('postcss-short');
const cssImport = require('postcss-import');
const customMedia = require('postcss-custom-media');
const customProperties = require('postcss-custom-properties');
const autoprefixer = require('autoprefixer');

module.exports = {
    devtool: 'source-map',
    entry: [
        './src/index'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    plugins: [
        /**
        * This plugin assigns the module and chunk ids by occurence count. What this
        * means is that frequently used IDs will get lower/shorter IDs - so they become
        * more predictable.
        */
        new webpack.optimize.OccurenceOrderPlugin(),
        /**
        * See description in 'webpack.config.dev' for more info.
        */
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production'),
            __DEVELOPMENT__: false
        }),
        /**
        * Some of you might recognize this! It minimizes all your JS output of chunks.
        * Loaders are switched into a minmizing mode. Obviously, you'd only want to run
        * your production code through this!
        */
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false
            }
        }),
        new ExtractTextPlugin('[name].css', { allChunks: true })
    ],
    module: {
        loaders: [
            {
                test: /\.js(|x)$/,
                loaders: ['babel'],
                include: path.join(__dirname, 'src')
            }, {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=2!postcss')
            }
        ]
    },
    postcss: () => ([
        nested,
        assets(),
        cssShort(),
        cssImport(),
        customMedia(),
        customProperties(),
        autoprefixer({ browsers: ['last 2 versions'] })
    ]),
    resolve: {
        extensions: ['', '.js', '.jsx'],
        modulesDirectories: [
            'src',
            'node_modules'
        ],
    }
};
