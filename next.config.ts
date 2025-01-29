import createNextIntlPlugin from "next-intl/plugin"

const withNextIntl = createNextIntlPlugin()

/** @type {import('next').NextConfig} */
const nextConfig: any = {
    images: {
        remotePatterns: [
            {
                hostname: "**", // Replace with your hostname
                // Replace with your image path or use `/**` for all paths
            },
        ],
    },
}

export default withNextIntl(nextConfig)
