import path from 'path'

const __dirname = path.resolve(path.dirname(''))

export default {
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, 'web'),
        filename: 'bundle.js'
    },
    plugins: [],
    module: {
        rules: [
            {
                test: /.ts$/, use: 'ts-loader'
            }
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    optimization: {
        minimize: true,
        minimizer: [
            // For webpack v5, you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line // `...`,
            `...`,
        ],
    },
    mode: "production",
};