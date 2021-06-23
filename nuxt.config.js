import path from 'path'
export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: '选型宝_企业软件的大众点评-ERP_BI_CRM_OA_企业邮箱怎么选？',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'ERP系统_BI_CRM系统_OA系统_数据库软件_BPM系统_企业邮箱...想了解各种企业软件的用户口碑?就上选型宝, 企业级软件的大众点评，实名制的CIO选型经验交流社区' },
      { hid: 'keywords', name: 'keywords', content: 'ERP_BI_CRM_OA_数据库_BPM_企业邮箱' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/images/xxb_mark.png' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    // 'ant-design-vue/dist/antd.css'
    'swiper/dist/css/swiper.css'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '@/plugins/antd-ui', ssr: true },
    { src: '@/plugins/configs' },
    { src: '@/plugins/requests' },
    { src: '@/plugins/vue-lazyload', ssr: false },
    { src: '@/plugins/vue-awesome-swiper', ssr: false }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios'
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    extend (config, ctx) {
      const sassResourcesLoader = {
        loader: 'sass-resources-loader',
        options: {
          resources: [
            'assets/sass/basic.sass'
          ]
        }
      }
      // 遍历nuxt定义的loader配置，向里面添加新的配置。
      config.module.rules.forEach((rule) => {
        if (rule.test.toString() === '/\\.vue$/') {
          rule.options.loaders.sass.push(sassResourcesLoader)
          rule.options.loaders.scss.push(sassResourcesLoader)
        }
        if (['/\\.sass$/', '/\\.scss$/'].includes(rule.test.toString())) {
          rule.use.push(sassResourcesLoader)
        }
      })
      config.resolve.alias['@ant-design/icons/lib/dist$'] = path.resolve(__dirname, './plugins/antd-icon.js') // 引入需要的
    },
    analyze: true, // 使用webpack-bundle-analyzer来可视化包以及如何优化它们
    vendor: ['ant-design-vue'],
    productionSourceMap: false,
    productionGzip: true,
    productionGzipExtensions: ['js', 'css', 'svg'],
    babel: {
      plugins: [
        [
          'import',
          {
            libraryName: 'ant-design-vue',
            libraryDirectory: 'es',
            style: 'css'
            // 默认不使用该选项，即不导入样式 , 注意 ant-design-vue 使用 js 文件引入样式
            // true 表示 import  'ant-design-vue/es/component/style'
            // 'css' 表示 import 'ant-design-vue/es/component/style/css'
          }
        ]
      ]
    },
    transpile: [/ant-design-vue/],
    optimization: {
      splitChunks: {
        minSize: 10000,
        maxSize: 250000
      }
    }
  },
  render: {
    resourceHints: false
  }
}
