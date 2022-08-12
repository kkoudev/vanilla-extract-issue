const {
  createVanillaExtractPlugin
} = require('@vanilla-extract/next-plugin');
const withVanillaExtract = createVanillaExtractPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = withVanillaExtract({
  experimental: {
    images: {
      unoptimized: true,
    },
  },
  compiler: {
    removeConsole: {
      exclude: ['error'],
    },
  },
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,

  publicRuntimeConfig: {
    nodeEnv: process.env.NODE_ENV,
    appEnv: process.env.NEXT_PUBLIC_APP_ENV,
    websiteScheme: process.env.NEXT_PUBLIC_WEBSITE_SCHEME,
    websiteHost: process.env.NEXT_PUBLIC_WEBSITE_HOST,
  },
});

module.exports = nextConfig;
