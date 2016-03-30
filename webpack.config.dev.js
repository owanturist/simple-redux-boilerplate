const path = require('path');
const webpack = require('webpack');

const nested = require('postcss-nested');
const assets = require('postcss-assets');
const cssShort = require('postcss-short');
const cssImport = require('postcss-import');
const customMedia = require('postcss-custom-media');
const customProperties = require('postcss-custom-properties');
const autoprefixer = require('autoprefixer');

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: [
        'eventsource-polyfill', // necessary for hot reloading with IE
        'webpack-hot-middleware/client',
        './src/index'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    plugins: [
        /**
        * This is where the magic happens! You need this to enable Hot Module Replacement!
        */
        new webpack.HotModuleReplacementPlugin(),
        /**
        * NoErrorsPlugin prevents your webpack CLI from exiting with an error code if
        * there are errors during compiling - essentially, assets that include errors
        * will not be emitted. If you want your webpack to 'fail', you need to check out
        * the bail option.
        */
        new webpack.NoErrorsPlugin(),
        /**
        * DefinePlugin allows us to define free variables, in any webpack build, you can
        * use it to create separate builds with debug logging or adding global constants!
        * Here, we use it to specify a development build.
        */
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development'),
            __DEVELOPMENT__: true
        }),
    ],
    module: {
        loaders: [
            {
                test: /\.js(|x)$/,
                exclude: [/node_modules/, /styles/],
                loaders: ['babel'],
                include: path.join(__dirname, 'src')
            }, {
                test: /\.css$/,
                loader: 'style!css?modules&importLoaders=2&sourceMap&localIdentName=[local]___[hash:base64:5]!postcss'
            },
            {
                test: /\.(png|svg|gif)$/,
                loader: "file-loader"
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
