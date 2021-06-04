export default {
  modules: [
    // https://www.npmjs.com/package/@nuxtjs/robots
    [
      '@nuxtjs/robots',
      {
        /* module options */ UserAgent: '*',
        Allow: '/',
        Sitemap: process.env.BASE_URL + '/sitemap.xml',
      },
    ],
    // https://sitemap.nuxtjs.org/guide/setup
    [
      '@nuxtjs/sitemap',
      {
        /* module options */
        path: '/sitemap.xml',
        hostname: process.env.BASE_URL,
        gzip: true,
      },
    ],
  ],
}
