const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const lessToJs = require('less-vars-to-js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const DashboardPlugin = require('webpack-dashboard/plugin');
const TerserPlugin = require('terser-webpack-plugin');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const SimpleWebpackCdnPlugin = require('./cdn.config.js');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const postcssPresetEnv = require('postcss-preset-env');
const WebpackBar = require('webpackbar');

const isDev = process.env.NODE_ENV === 'development';

const themeVariables = lessToJs(
  fs.readFileSync(path.join(__dirname, './src/styles/theme.less'), 'utf8'),
);

module.exports = {
  mode: isDev ? 'development' : 'production',
  entry: './src/index.tsx',
  output: isDev
    ? {
        path: path.join(__dirname, 'dist'),
        publicPath: '/',
        filename: 'js/[name].js',
      }
    : {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'js/[name].[chunkhash].js',
        chunkFilename: 'js/[name].[chunkhash].js',
      },

  devtool: isDev ? 'source-map' : 'cheap-module-source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
    alias: {
      '@': path.resolve(__dirname, 'src/'),
    },
  },
  devServer: {
    historyApiFallback: true,
    host: '127.0.0.1',
    port: 8080,
    disableHostCheck: true,
    contentBase: [path.join(__dirname, 'public'), __dirname],
    proxy: [
      {
        context: ['/api', '/_api', '/images'],
        target: 'http://127.0.0.1:5000',
      },
    ],
  },
  optimization: isDev
    ? {}
    : {
        minimizer: [
          new TerserPlugin({
            cache: true,
            parallel: true,
          }),
        ],
        splitChunks: {
          cacheGroups: {
            vendors: {
              test: /lodash/,
              name: 'vendor-lodash',
            },
            commons: {
              name: 'commons',
              chunks: 'all',
              minChunks: 3,
            },
            styles: {
              name: 'styles',
              test: /\.(css|less)$/,
              chunks: 'all',
              enforce: true,
            },
          },
        },
      },
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {},
          },
        ],
      },
      {
        test: /\.m\.less$/,
        use: [
          isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-modules-typescript-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localsConvention: 'camelCaseOnly',
            },
          },
          {
            loader: 'less-loader',
            options: {
              javascriptEnabled: true,
            },
          },
        ],
      },
      {
        test: /\.less$/,
        exclude: /\.m\.less$/,
        use: [
          isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'less-loader',
            options: {
              javascriptEnabled: true,
              modifyVars: themeVariables,
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: () => [postcssPresetEnv(/* pluginOptions */)],
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.tsx?$/,
        use: ['babel-loader'],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: '易佰数据平台',
      template: './public/index.dev.html',
    }),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new DashboardPlugin(),
    new SimpleWebpackCdnPlugin({
      modules: isDev
        ? []
        : [
            'react',
            'react-dom',
            'react-router-dom',
            'axios',
            'moment',
            'echarts',
          ],
      prod: !isDev,
      publicPath: '/node_modules',
    }),
  ],
};

if (!isDev) {
  module.exports.plugins = [
    ...(module.exports.plugins || []),
    new BundleAnalyzerPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[chunkhash:8].css',
      chunkFilename: 'css/[name]-[chunkhash:8].css',
    }),
    new webpack.HashedModuleIdsPlugin(),
    new CleanWebpackPlugin(),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css\.*(?!.*map)/g,
      cssProcessor: require('cssnano'),
      cssProcessorPluginOptions: {
        preset: ['default', { discardComments: { removeAll: true } }],
      },
      canPrint: true,
    }),
    new HardSourceWebpackPlugin(),
    new WebpackBar(),
  ];
}

if (isDev) {
  module.exports.plugins = [
    ...(module.exports.plugins || []),
    new DashboardPlugin(),
  ];
}
