/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
        serverComponentsExternalPackages: ["mongoose"],
        webpack(config) {
            config.experiments = {
                ...config.experiments,
                topLevelAwait: true,
                
            }
            return config
        }
    },
    images: {
        domains: ['lh3.googleusercontent.com', 'uploadthing.com'],
    },
}

module.exports = nextConfig
