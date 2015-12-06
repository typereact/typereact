var webpack = require('webpack');

module.exports = {  
    entry: [
      'webpack/hot/only-dev-server',
      "./server/app.js"
    ],
    output: {
        path: __dirname + '/build',
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.js?$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/ },
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
            { test: /\.css$/, loader: "style!css" }
        ]
    },
    plugins: [
      new webpack.NoErrorsPlugin()
    ]

};

// var webpack = require('webpack');

// module.exports = {  
//   devtool: 'inline-source-map',
//   entry: [
//     'webpack-dev-server/client?http://localhost:8080',
//     'webpack/hot/only-dev-server',
//     './client/entry',
//   ],
//   output: {
//     path: __dirname + '/server/',
//     filename: 'app.js',
//     publicPath: 'http://localhost:8080/',
//   },
//   plugins: [
//     new webpack.HotModuleReplacementPlugin(),
//     new webpack.NoErrorsPlugin(),
//   ],
//   resolve: {
//     extensions: ['', '.js']
//   },
//   module: {
//     loaders: [
//       { test: /\.jsx?$/, loaders: ['react-hot', 'babel-loader?experimental'], exclude: /node_modules/ }
//     ]
//   }
// }
