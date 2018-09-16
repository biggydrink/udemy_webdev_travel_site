let path = require('path');

module.exports = {
    mode: "production",
    entry: './app/assets/scripts/App.js',
    output: {
        path: path.resolve(__dirname, './app/temp/scripts'),
        filename: 'App.js'
    }
};

let model = {
    loaders: [
        {
            loader: 'babel-loader',
            query: {
                presets: ['es2015']
            },
            test: /\.js$/, //regex for js files,
            exclude: /node_modules/
        }
    ]
}