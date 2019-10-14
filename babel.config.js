module.exports = {
  presets: [
    [
      '@babel/env',
      {
        targets: {
          // chrome: 60,
          browsers: ['last 2 versions', 'safari 7'],
        },
        modules: false,
        useBuiltIns: 'usage',
        debug: false,
        corejs: 3,
      },
    ],
    '@babel/react',
    '@babel/preset-typescript',
  ],
  plugins: [
    [
      'import',
      {
        libraryDirectory: 'es',
        libraryName: 'antd',
        style: true,
      },
      'antd',
    ],
    [
      'import',
      {
        libraryName: 'ant-design-pro',
        libraryDirectory: 'lib',
        style: true,
        camel2DashComponentName: false,
      },
      'antdPro',
    ],
    [
      'import',
      {
        libraryName: 'react-use',
        libraryDirectory: 'lib',
        camel2DashComponentName: false,
      },
    ],
    [
      '@babel/plugin-proposal-decorators',
      {
        legacy: true,
      },
    ],
    [
      '@babel/plugin-proposal-class-properties',
      {
        loose: true,
      },
    ],
    '@babel/plugin-syntax-dynamic-import',
    'lodash',
    'react-hot-loader/babel',
  ],
};
