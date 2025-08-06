/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove output: "export" for development mode
  // output: "export", // Uncomment only for production static export
  trailingSlash: true,

  // DISABLE CACHING DURING DEVELOPMENT - Using headers instead
  async headers() {
    if (process.env.NODE_ENV === "development") {
      return [
        {
          source: "/(.*)",
          headers: [
            {
              key: "Cache-Control",
              value: "no-cache, no-store, must-revalidate",
            },
          ],
        },
      ];
    }
    return [];
  },

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
