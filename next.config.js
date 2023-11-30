/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  reactStrictMode: true,
  images: {
    domains: ["cdn.fleaauction.world"]
  }
}

module.exports = nextConfig
