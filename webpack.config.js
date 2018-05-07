const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

//Based on the node_env variable (prod set by host, otherwise set by us in script using cross-env)
if (process.env.NODE_ENV === 'test') {
    require('dotenv').config({ path: '.env.test' });
} else if (process.env.NODE_ENV === 'development') {
    require('dotenv').config({ path: '.env.development' });
}

module.exports = env => {
    const isProduction = env === 'production';

    return {
        entry: './src/app.js',
        output: {
            path: path.join(__dirname, 'public', 'dist'),
            filename: 'bundle.js'
        },
        module: {
            rules: [
                {
                    loader: 'babel-loader',
                    test: /\.js$/,
                    exclude: /node_modules/
                },
                {
                    test: /\.s?css$/,
                    use: ExtractTextPlugin.extract({
                        use: [
                            //style loader will load styles inline to bundle.js
                            //'css-loader', //load the css
                            //'sass-loader' //convert sass to css first
                            {
                                loader: 'css-loader',
                                options: {
                                    sourceMap: true
                                }
                            },
                            {
                                loader: 'sass-loader',
                                options: {
                                    sourceMap: true
                                }
                            }
                        ],
                        fallback: 'style-loader'
                    })
                }
            ]
        },
        plugins: [
            new ExtractTextPlugin('styles.css'),
            //manually pass node env variables
            //does a find and replace for the key and replaces it with the value so we
            new webpack.DefinePlugin({
                'process.env.FIREBASE_API_KEY': JSON.stringify(
                    process.env.FIREBASE_API_KEY
                ),
                'process.env.FIREBASE_AUTH_DOMAIN': JSON.stringify(
                    process.env.FIREBASE_AUTH_DOMAIN
                ),
                'process.env.FIREBASE_DB_URL': JSON.stringify(
                    process.env.FIREBASE_DB_URL
                ),
                'process.env.FIREBASE_PROJECT_ID': JSON.stringify(
                    process.env.FIREBASE_PROJECT_ID
                ),
                'process.env.FIREBASE_STORAGE_BUCKET': JSON.stringify(
                    process.env.FIREBASE_STORAGE_BUCKET
                ),
                'process.env.FIREBASE_MESSAGING_SENDER_ID': JSON.stringify(
                    process.env.FIREBASE_MESSAGING_SENDER_ID
                )
            })
        ],
        devtool: isProduction ? 'source-map' : 'inline-source-map',
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            historyApiFallback: true,
            publicPath: '/dist/'
        }
    };
};
