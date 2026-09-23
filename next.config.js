/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ['@chakra-ui/react', 'react-icons', 'framer-motion'],
  },
}

module.exports = nextConfig
