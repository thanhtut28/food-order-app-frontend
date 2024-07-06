const nextConfig = {
   reactStrictMode: true,
   images: {
      remotePatterns: [
         {
            protocol: "https",
            port: "",
            pathname: "",
            hostname: "images.unsplash.com",
         },
         {
            protocol: "https",
            port: "",
            pathname: "/007_nl/products_nl/**",
            hostname: "www.burgerking.nl",
         },
      ],
   },

   transpilePackages: ["three"],
};

module.exports = nextConfig;
