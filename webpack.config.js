const webpack = require('webpack');
const path = require('path');

const DashboardPlugin = require('webpack-dashboard/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const autoprefixer = require('autoprefixer');

const nodeEnv = process.env.NODE_ENV || 'development';
const isProduction = nodeEnv === 'production';

const jsSourcePath = path.join(__dirname, './src/js');
const buildPath = path.join(__dirname, './build');
const imgPath = path.join(__dirname, './src/assets/images');
const fontPath = path.join(__dirname, './src/assets/fonts');
const sourcePath = path.join(__dirname, './src');

// Common plugins
const plugins = [
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    minChunks: Infinity,
    filename: 'assets/vendor-[hash].js',
  }),
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify(nodeEnv),
    },
  }),
  new webpack.NamedModulesPlugin(),
  new HtmlWebpackPlugin({
    template: path.join(sourcePath, 'index.html'),
    path: buildPath,
    filename: 'index.html',
  }),
  new webpack.LoaderOptionsPlugin({
    options: {
      postcss: [
        autoprefixer({
          browsers: [
            'last 3 version',
            'ie >= 10',
          ],
        }),
      ],
      context: sourcePath,
    },
  })
];

// Common rules
const rules = [
  {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use: [
      'babel-loader'
    ],
  },
  {
    test: /\.(png|gif|jpg|svg)$/,
    include: imgPath,
    use: 'url-loader?limit=20480&name=assets/[name]-[hash].[ext]',
  },
  {
    test: /\.(eot|svg|ttf|woff|woff2)$/,
    include: fontPath,
    use: 'file-loader?name=assets/[name].[ext]'
  }
];

if (isProduction) {
  // Production plugins
  plugins.push(
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        screw_ie8: true,
        conditionals: true,
        unused: true,
        comparisons: true,
        sequences: true,
        dead_code: true,
        evaluate: true,
        if_return: true,
        join_vars: true,
      },
      output: {
        comments: false,
      },
    }),
    new ExtractTextPlugin({
      filename: (getPath) => {
        return `assets/${getPath('style-[hash].css')}`;
      }
    }),
    new FaviconsWebpackPlugin({
      logo: path.join(imgPath, 'icon.png'),
      prefix: 'icons-[hash]/',
      emitStats: false,
      persistentCache: true,
      inject: true,
      title: 'When You Move'
    })
  );

  // Production rules
  rules.push(
    {
      test: /\.styl$/,
      loader: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: 'css-loader!postcss-loader!stylus-loader',
      })
    }
  );
} else {
  // Development plugins
  plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new DashboardPlugin()
  );

  // Development rules
  rules.push(
    {
      test: /\.styl$/,
      exclude: /node_modules/,
      use: [
        'style-loader',
        // Using source maps breaks urls in the CSS loader
        // https://github.com/webpack/css-loader/issues/232
        // This comment solves it, but breaks testing from a local network
        // https://github.com/webpack/css-loader/issues/232#issuecomment-240449998
        // 'css-loader?sourceMap',
        'css-loader',
        'postcss-loader',
        'stylus-loader?sourceMap',
      ]
    }
  );
}

module.exports = {
  devtool: isProduction ? 'eval' : 'source-map',
  context: jsSourcePath,
  entry: {
    js: './index.js',
    vendor: [
      'babel-polyfill',
      'es6-promise',
      'isomorphic-fetch',
      'react-dom',
      'react',
    ],
  },
  output: {
    path: buildPath,
    publicPath: '/',
    filename: 'assets/app-[hash].js',
  },
  module: {
    exprContextCritical: false,
    rules,
  },
  resolve: {
    extensions: ['.webpack-loader.js', '.web-loader.js', '.loader.js', '.js', '.jsx'],
    modules: [
      path.resolve(__dirname, 'node_modules'),
      jsSourcePath,
    ],
    alias: {
      'images'  : path.resolve(__dirname, 'src/assets/images'),
      'config'  : path.resolve(__dirname, 'src/js/config'),
      'modules' : path.resolve(__dirname, 'src/js/modules'),
      'stylus'  : path.resolve(__dirname, 'src/assets/stylus'),
      'css'     : path.resolve(__dirname, 'src/assets/css')
    }
  },
  plugins,
  devServer: {
    contentBase: isProduction ? './build' : './src',
    historyApiFallback: true,
    port: 3000,
    headers: { "Access-Control-Allow-Origin": "*" },
    compress: isProduction,
    inline: !isProduction,
    hot: !isProduction,
    host: '0.0.0.0',
    stats: {
      assets: true,
      children: false,
      chunks: false,
      hash: false,
      modules: false,
      publicPath: false,
      timings: true,
      version: false,
      warnings: true,
      colors: {
        green: '\u001b[32m',
      },
    },
  },
};
