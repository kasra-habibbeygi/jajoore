/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    staticPageGenerationTimeout: 1000,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'test-back-api.jajooreh.com',
                port: '',
                pathname: '/Images/**'
            }
        ]
    },
    env: {
        URL: process.env.URL,
        IMAGE_URL: process.env.IMAGE_URL
    }
};

module.exports = nextConfig;
