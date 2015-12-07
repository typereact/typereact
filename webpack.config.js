var webpack = require('webpack');
var path = require('path')

module.exports = {  
    entry: [
      'babel-polyfill', 
      // 'webpack/hot/only-dev-server',
      "./server/app.js",
      'webpack-dev-server/client?http://localhost:8080'
    ],
    output: {
        path: __dirname,
        // publicPath: '/',
        filename: "bundle.js"
    },
    module: {
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
                // { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
            { 
                test: /\.css$/, 
                loader: "style!css" 
            }
        ]
    }
    // plugins: [
    //   new webpack.NoErrorsPlugin()
    // ]

};

