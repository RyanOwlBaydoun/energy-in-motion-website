/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable static export - use Node.js hosting on Hostinger
  // output: "export", // Enable for production static export
  trailingSlash: true,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "demo.awakenthemes.com",
      },
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
    unoptimized: false, // Enable optimization for better performance
  },
};

module.exports = nextConfig;
