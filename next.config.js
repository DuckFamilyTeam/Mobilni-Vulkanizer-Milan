/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compress: true, // gzip on text assets
  poweredByHeader: false, // smaller response headers
  productionBrowserSourceMaps: false, // smaller bundle in prod
};

module.exports = nextConfig;
