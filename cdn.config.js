const WebpackCdnPlugin = require('webpack-cdn-plugin');

const CDN_MODULES = {
  localforage: {
    name: 'localforage',
    var: 'localforage',
    path: 'dist/localforage.min.js',
  },
  react: {
    name: 'react',
    var: 'React',
    path: 'umd/react.production.min.js',
  },
  'react-dom': {
    name: 'react-dom',
    var: 'ReactDOM',
    path: 'umd/react-dom.production.min.js',
  },
  'react-router-dom': {
    name: 'react-router-dom',
    var: 'ReactRouterDOM',
    path: 'umd/react-router-dom.min.js',
  },
  mobx: {
    name: 'mobx',
    var: 'mobx',
    path: 'lib/mobx.umd.min.js',
  },
  axios: {
    name: 'axios',
    var: 'axios',
    path: 'dist/axios.min.js',
  },
  echarts: {
    name: 'echarts',
    var: 'echarts',
    path: 'dist/echarts.min.js',
  },
  'mobx-react': {
    name: 'mobx-react',
    var: 'mobxReact',
    path: 'index.min.js',
  },
  moment: [
    {
      name: 'moment',
      var: 'moment',
      cdn: 'moment',
      path: 'min/moment.min.js',
    },
    {
      name: 'moment',
      path: 'locale/zh-cn.js',
      cdn: 'moment',
    },
  ],
};

// '//lib.baomitu.com/:name/:version/:path'
const jsdelivrProdUrl = '//cdn.jsdelivr.net/npm/:name@:version/:path';

class SimpleWebpackCdnPlugin extends WebpackCdnPlugin {
  constructor({ modules, prodUrl, ...rest }) {
    super({
      ...rest,
      prodUrl: prodUrl || jsdelivrProdUrl,
      modules: modules.map(item =>
        typeof item === 'string' ? CDN_MODULES[item] : item,
      ),
    });
  }
}

module.exports = SimpleWebpackCdnPlugin;
