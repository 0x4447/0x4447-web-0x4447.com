import plugins from './plugins'
import head from './configuration/head'
import modules from './configuration/modules'
import styleResources from './configuration/style-resources'
import buildModules from './configuration/build-modules'

export default {
  // page loading progress styles
  loading: {
    color: '#007bff',
    height: '1px',
  },

  // custom classes for vue routnper exact link
  router: {
    linkActiveClass: 'active',
    linkExactActiveClass: 'exact-active',
  },

  // configure env for using inside app
  env: {
    baseUrl: process.env.BASE_UR,
    IDENTITY_POOL_ID: process.env.IDENTITY_POOL_ID,
  },
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  ...head,

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/styles/scss/main.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  ...plugins,

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  ...buildModules,

  // Modules: https://go.nuxtjs.dev/config-modules
  ...modules,

  // Style resources https://www.npmjs.com/package/@nuxtjs/style-resources
  ...styleResources,

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['vee-validate/dist/rules'],
  },
}
