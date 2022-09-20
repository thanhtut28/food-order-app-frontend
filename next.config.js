/** @type {import('next').NextConfig} */
const nextConfig = {
   reactStrictMode: true,
   swcMinify: true,
   images: {
      domains: ["images.unsplash.com", "www.burgerking.nl"],
   },
};

module.exports = nextConfig;
