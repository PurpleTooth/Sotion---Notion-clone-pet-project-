/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["files.edgestore.dev"],
    unoptimized: true,
  },
};

module.exports = nextConfig;
