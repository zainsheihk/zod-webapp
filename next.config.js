/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["os.alipayobjects.com"],
  },
  use: ["@svgr/webpack"],
};

module.exports = nextConfig;
