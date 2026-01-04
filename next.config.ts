import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "coursevita-storate.s3.ap-south-1.amazonaws.com" },
      { protocol: "https", hostname: "coursevita-main-site.s3.eu-north-1.amazonaws.com" },
      { protocol: "https", hostname: "res.cloudinary.com" },
      { protocol: "https", hostname: "coursevita.com" },
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "randomuser.me" },
      { protocol: "https", hostname: "placehold.co" },
    ],
  },

  compress: true,
};

export default nextConfig;
