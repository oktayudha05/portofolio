/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        outputStandalone: true, // Optional, hanya untuk standalone builds
    },
    serverRuntimeConfig: {
        trustProxy: true, // Mengizinkan X-Forwarded-Proto untuk mendeteksi HTTPS
    },
};

export default nextConfig;
