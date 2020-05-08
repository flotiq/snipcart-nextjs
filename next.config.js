require('dotenv').config();
const withTypescript = require('@zeit/next-typescript')
const withSass = require('@zeit/next-sass')

module.exports = withTypescript(withSass({
    env: {
      'SNIPCART_NEXTJS_FLOTIQ_BASE_URL': process.env.SNIPCART_NEXTJS_FLOTIQ_BASE_URL,
      'GATSBY_FLOTIQ_API_KEY': process.env.GATSBY_FLOTIQ_API_KEY,
      'SNIPCART_API_KEY': process.env.SNIPCART_API_KEY
    }
}));