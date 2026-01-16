/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/Lamech-CorporateSite202601' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/Lamech-CorporateSite202601/' : '',
  trailingSlash: true,
}

export default nextConfig
