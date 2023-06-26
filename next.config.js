/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    staticPageGenerationTimeout: 1000,

    env: {
        URL: process.env.URL
    }
};

module.exports = nextConfig;
