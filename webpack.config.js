var webpack = require('webpack');
var path = require('path');

module.exports = {
    devtool: 'inline-source-map',
    entry: [
      'webpack-dev-server/client?http://127.0.0.1:8080/',
      'webpack/hot/only-dev-server',
      './src' 
    ],
    // webpack creates a graph of all of your application's dependencies. 
    //The starting point of this graph is known as an entry point. 
    //The entry point tells webpack where to start and follows the graph of dependencies to know what to bundle. 
    //You can think of your application's entry point as the contextual root or the first file to kick off your app.
    output: {
      path: path.join(__dirname, 'public'),
      filename: 'bundle.js' 
    },
    //Once you've bundled all of your assets together, you still need to tell webpack where to 
    //bundle your application. The webpack output property tells webpack how to treat bundled code.
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loaders: ['react-hot-loader', 'babel-loader?presets[]=react,presets[]=es2015']
        }
      ]
    },
    // Loaders: The goal is to have all of the assets in your project be webpack's concern and not the browser's 
    //(though, to be clear, this doesn't mean that they all have to be bundled together). 
    //webpack treats every file (.css, .html, .scss, .jpg, etc.) as a module. However, webpack itself only 
    //understands JavaScript.
    // Loaders in webpack transform these files into modules as they are added to your dependency graph.
    // At a high level, loaders have two purposes in your webpack config. They work to:
    // Identify which file or files should be transformed by a certain Loader. (test property)
    // Transform those files so that they can be added to your dependency graph (and eventually your bundle). 
    //(use property)
    
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoEmitOnErrorsPlugin()
    ]
}