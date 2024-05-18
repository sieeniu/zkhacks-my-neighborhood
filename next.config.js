/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: [],
  },
  eslint: {
    ignoreDuringBuilds: true,
    dirs: ['src/pages'],
  },
};

module.exports = nextConfig;
