/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains:
            ["images.pexels.com"],
        
    }
}

module.exports = {
    eslint: {
      // Warning: This allows production builds to successfully complete even if
      // your project has ESLint errors.
      ignoreDuringBuilds: true,
    },
  }