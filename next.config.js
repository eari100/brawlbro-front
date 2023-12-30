/** @type {import('next').NextConfig} */
const nextConfig = {
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
