export default {
  head: {
    titleTemplate: '0x4447, LLC. - %s',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
    ],
    link: [
      {
        name: 'apple-mobile-web-app-title',
        content: '0x4447 LLC',
      },
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: 'favicons/favicon.ico',
      },
      {
        rel: 'icon',
        type: 'image/png',
        href: 'favicons/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        href: 'favicons/favicon-16x16.png',
      },
      {
        name: 'apple-touch-icon',
        href: 'favicons/apple-touch-icon.png',
      },
      {
        rel: 'manifest',
        href: 'favicons/site.webmanifest',
      },
      {
        rel: 'mask-icon',
        href: 'favicons/safari-pinned-tab.svg',
        color: '#5bbad5',
      },
    ],
  },
}
