/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  reactStrictMode: true,
  images: {
    domains: ["cdn.fleaauction.world"]
  },
  env: {
    API_BASE_URL: process.env.API_BASE_URL
  }
}

module.exports = nextConfig
