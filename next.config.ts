import config from "@/shared/config";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  output: "export",
  basePath: config.basepath,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
