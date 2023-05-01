/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // For Nivo Calendar to work, see: https://github.com/plouc/nivo/issues/1941#issuecomment-1067197724
  experimental: {
    esmExternals: 'loose'
  }
}

module.exports = nextConfig
