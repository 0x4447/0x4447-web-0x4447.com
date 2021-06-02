export default {
  loading: {
    color: '#007bff',
    height: '1px'
  },
  router: {
    linkActiveClass: "active",
    linkExactActiveClass: "exact-active"
  },
  env: {
    baseUrl: process.env.BASE_UR,
    IDENTITY_POOL_ID: process.env.IDENTITY_POOL_ID,
  },
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: "0x4447, LLC. - %s",
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
    ],
    link: [
      {
        name: "apple-mobile-web-app-title",
        content: "0x4447 LLC"
      },
      {
        rel: "icon",
        type: "image/x-icon",
        href: "favicons/favicon.ico"
      },
      {
        rel: "icon",
        type: "image/png",
        href: "favicons/favicon-32x32.png",
      },
      {
        rel: "icon",
        type: "image/png",
        href: "favicons/favicon-16x16.png",
      },
      {
        name: "apple-touch-icon",
        href: "favicons/apple-touch-icon.png",
      },
      {
        rel: "manifest",
        href: "favicons/site.webmanifest",
      },
      {
        rel: "mask-icon",
        href: "favicons/safari-pinned-tab.svg",
        color: '#5bbad5'
      }
    ],
    script: [
      {
        src: "https://code.jquery.com/jquery-3.6.0.min.js",
        body: false
      },
      {
        src: "/public/js/libs/bootstrap.bundle.min.js",
        body: true
      },
      {
        src: "https://sdk.amazonaws.com/js/aws-sdk-2.714.0.min.js",
        body: false
      },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "~/assets/styles/theme.scss"
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    // '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    // '@nuxtjs/stylelint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://www.npmjs.com/package/@nuxtjs/robots
    "@nuxtjs/robots",
    // https://sitemap.nuxtjs.org/guide/setup
    "@nuxtjs/sitemap"
  ],

  robots: {
    /* module options */
    UserAgent: "*",
    Allow: "/",
    Sitemap: process.env.BASE_URL + "/sitemap.xml"
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}

};
