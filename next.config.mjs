/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "stastudent.no",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
