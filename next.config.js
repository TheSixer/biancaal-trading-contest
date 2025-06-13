/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: process.env.NODE_ENV === 'production' ? '/biancaal-trading-contest' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/biancaal-trading-contest/' : ''
}

module.exports = nextConfig