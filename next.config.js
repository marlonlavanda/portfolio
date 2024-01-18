/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["github.com", "www.fakeimg.pl"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "wordpress.nextjswp.com", // <-- Change to your WordPress site
      },
      {
        protocol: "https",
        hostname: "**.gravatar.com",
      },
    ],
  },
}

module.exports = nextConfig
