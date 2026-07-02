import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",

  images: {
    unoptimized: true,
    formats: ["image/avif", "image/webp"],
  },

  compress: true,

  productionBrowserSourceMaps: false,

  trailingSlash: false,
};

export default nextConfig;