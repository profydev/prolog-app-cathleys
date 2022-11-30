/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["prolog-api.profy.dev"],
  },

  env: {
    NEXT_PUBLIC_VERSION: process.env.npm_package_version,
  },
};

module.exports = nextConfig;
