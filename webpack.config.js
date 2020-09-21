const path = require('path')
const fs = require('fs')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')

const src = './src'
const srcExercices = './exercices'
const pages = []
fs.readdirSync(srcExercices, { withFileTypes: true }).forEach((dirent) => {
  if (dirent.isDirectory()) {
    pages.push(dirent.name)
  }
})

const entries = {}
entries['base'] = [`${src}/base.js`]
const htmlPlugins = []
for (const p of pages) {
  entries[p] = [`${src}/base.js`, `${srcExercices}/${p}/index.js`]

  htmlPlugins.push(
    new HtmlWebpackPlugin({
      filename: `${p}`,
      template: `${srcExercices}/${p}/index.html`,
      chunks: [p],
    })
  )
}

module.exports = {
  entry: entries,
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          'postcss-loader',
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },
    ],
  },
  devtool: 'sourcemap',
  plugins: [
    new FriendlyErrorsWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: `index.html`,
      template: `${src}/index.html`,
      chunks: ['base'],
    }),
    ...htmlPlugins,
  ],
}
