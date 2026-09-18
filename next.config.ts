import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        pathname: "/fernanditoariel/belen-goicochea-web/main/public/images/**",
      },
    ],
  },
};

export default nextConfig;
