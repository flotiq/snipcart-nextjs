require('dotenv').config();
const withTypescript = require('@zeit/next-typescript')
const withSass = require('@zeit/next-sass')

module.exports = withTypescript(withSass({
    env: {
      'SNIPCART_NEXTJS_FLOTIQ_BASE_URL': process.env.SNIPCART_NEXTJS_FLOTIQ_BASE_URL,
      'FLOTIQ_API_KEY': process.env.FLOTIQ_API_KEY
    }
}));