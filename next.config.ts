import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        pathname: "/PokeAPI/sprites/master/sprites/**",
      },
      {
        protocol: "https",
        hostname: "pokeapi.co",
        pathname: "/media/**",
      },
    ],
    minimumCacheTTL: 60 * 60 * 24 * 7, // Cache for 7 days
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  async redirects() {
    return [
      {
        source: "/pagination",
        has: [
          {
            type: "query",
            key: "limit",
            value: "(?!^[1-9]\\d*$).*", // Not a positive integer redirect to page 1
          },
        ],
        destination: "/pagination?page=1",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
