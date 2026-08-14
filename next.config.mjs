/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/negra-design',
  assetPrefix: '/negra-design/',
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async headers() {
    return [
      {
        // Statyczne zasoby Next.js mogą być cache'owane długoterminowo (immutable, hashowane nazwy).
        source: "/_next/static/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },
};

export default nextConfig;