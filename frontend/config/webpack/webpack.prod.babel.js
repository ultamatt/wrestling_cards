import CleanWebpackPlugin from 'clean-webpack-plugin';
import { DefinePlugin } from 'webpack';

import paths from './paths';

module.exports = {
    mode: 'production',
    output: {
        filename: `${paths.jsFolder}/[name].[hash].js`,
        path: paths.outputPath,
        chunkFilename: '[name].[chunkhash].js'
    },
    plugins: [
        new DefinePlugin({
            __BackendUrl__:JSON.stringify("http://localhost")
        }),
        new CleanWebpackPlugin([paths.outputPath.split('/').pop()], {
            root: paths.root
        })
    ],
    devtool: 'source-map'
};
