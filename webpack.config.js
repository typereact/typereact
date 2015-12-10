var webpack = require('webpack');
var path = require('path')

module.exports = {  
    entry: [
    //for es6
      'babel-polyfill', 
      // 'webpack-hot-middleware/client'
      // 'webpack/hot/dev-server',
      "./server/app.js",
      // 'webpack-dev-server/client?http://localhost:8080'
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
            // {
            //     test: /\.js$/,
            //     loader: 'babel-loader',

            // },
                // { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
            { 
                test: /\.css$/, 
                loader: "style-loader!css-loader" 
            }
        ]
    },
    plugins: [
      new webpack.NoErrorsPlugin()
    ]

};

