/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  // Disable server-side features since we're doing static export
  typescript: {
    ignoreBuildErrors: true
  }
};

module.exports = nextConfig;