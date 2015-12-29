var webpack = require('webpack');
var path = require('path');
require('es6-promise').polyfill();

module.exports = {  
    entry: [
    //for es6
      'babel-polyfill', 
      // 'webpack/hot/only-dev-server',
      // "./server/app.js",
      "./shared/index.js",
      // 'webpack-dev-server/client?http://localhost:8080'
    ],
    output: {
        path: __dirname,
        // publicPath: '/',
        filename: "bundle.js"
    },
    module: {
        // preLoaders: [
        //   {
        //     test: /\.jsx?$/, 
        //     loader: 'eslint-loader', 
        //     exclude: /node_modules/
        //   }
        // ],
        loaders: [
            { 
                test: /\.jsx?$/, 
                // include: path.join(__dirname, 'src'),
                loader: 'babel-loader', 
                query: {
                    plugins: ['transform-runtime', 'transform-es2015-modules-commonjs'], 
                    presets: ['es2015', 'react']
                },
                exclude: /node_modules/
            },
            // {
            //     test: /\.js$/,
            //     loader: 'babel-loader',

            // },
                // { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
            { 
                test: /\.css$/, 
                loader: 'style-loader!css-loader'
            }
        ]
    },
    plugins: [
      new webpack.NoErrorsPlugin()
    ]

};

