/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    async rewrites() {
        return [
            {
                source: '/brawlstars/:path*',
                destination: 'https://api.brawlstars.com/:path*',
            },
        ]
    },
}

module.exports = nextConfig
