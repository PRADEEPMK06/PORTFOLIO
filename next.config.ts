import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Generate a static website
  output: "export",

  // Required for S3 static hosting
  images: {
    unoptimized: true,
    formats: ["image/avif", "image/webp"],
  },

  // Compression
  compress: true,

  // Production optimizations
  productionBrowserSourceMaps: false,

  // Disable trailing slash if you don't need folder-style URLs
  trailingSlash: false,
};

export default nextConfig;