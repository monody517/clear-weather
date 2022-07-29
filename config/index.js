const path = require('path');

const config = {
  projectName: 'clear-weather',
  date: '2022-7-21',
  // designWidth: 750,
  // deviceRatio: {
  //   640: 2.34 / 2,
  //   750: 1,
  //   828: 1.81 / 2
  // },
  sourceRoot: 'src',
  alias: {
    '@': path.resolve(__dirname, '..', 'src'),
  },
  outputRoot: `dist/${process.env.TARO_ENV}`,
  plugins: ['taro-plugin-pinia'],
  // // 给 sass-loader 传递选项 ！！！！ 按需加载方式必须配置
  // sass: {
  //   data: `@import "@nutui/nutui-taro/dist/styles/variables.scss";`,
  // },
  designWidth: 750,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2,
    375: 2 / 1
  },
  defineConstants: {
    IS_H5: process.env.TARO_ENV === "h5",
    IS_WEAPP: process.env.TARO_ENV === "weapp",
    IS_DEV: process.env.NODE_ENV === "development",
  },
  copy: {
    patterns: [],
    options: {}
  },
  framework: 'vue3',
  mini: {
    webpackChain (chain) {
      chain.merge({
        module: {
          rule: {
            mjsScript: {
              test: /\.mjs$/,
              include: [/pinia/],
              use: {
                babelLoader: {
                  loader: require.resolve('babel-loader')
                }
              }
            }
          }
        }
      })
    },
    postcss: {
      pxtransform: {
        enable: true,
        config: {}
      },
      url: {
        enable: true,
        config: {
          limit: 1024 // 设定转换尺寸上限
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    }
  },
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    postcss: {
      autoprefixer: {
        enable: true,
        config: {
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    }
  }
}

module.exports = function (merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'))
  }
  return merge({}, config, require('./prod'))
}
