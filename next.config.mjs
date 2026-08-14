/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/negra-design',
  assetPrefix: '/negra-design/',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;