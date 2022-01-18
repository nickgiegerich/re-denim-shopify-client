const withPWA = require('next-pwa');

module.exports = withPWA({
  future: { webpack5: true },
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV === 'development',
  },
  env: {
    siteTitle: 'Re-Denim',
    siteDescription: 'Repurposed clothing made from denim!',
    siteKeywords: 'denim, tailoring, alterations, embroidery, patches',
    siteUrl: 'https://www.re-denim.com',
    siteImagePreviewUrl: '/icon.png',
    // twitterHandle: ''
  },
  images: {
    domains: ['cdn.shopify.com'],
  },
})
