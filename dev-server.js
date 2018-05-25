var webpack           = require('webpack');
var webpackDevServer  = require('webpack-dev-server');
var config            = require('./Webpack.config');
var compiler          = webpack(config);

const nodeEnv = process.env.NODE_ENV || 'development';
const isProduction = nodeEnv === 'production';

var server = new webpackDevServer(compiler, {
  publicPath        : config.output.publicPath,
  historyApiFallback: true,
  contentBase: isProduction ? './build' : './src',
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
  }
});

server.listen(3000);
