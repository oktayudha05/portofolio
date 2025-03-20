/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    outputStandalone: true,
  },
  serverRuntimeConfig: {
    trustProxy: true,
  },
}

export default nextConfig;
