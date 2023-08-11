/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.pexels.com"],
  },
};

if (process.env.NODE_ENV === 'production') {
  nextConfig.eslint = {
    ignoreDuringBuilds: true,
  };
}

module.exports = nextConfig;
