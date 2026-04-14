/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "azim.hostlin.com",
        pathname: "/Kiddex/assets/images/**",
      },
    ],
  },
};

export default nextConfig;
