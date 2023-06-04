/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;

const withVideos = require("next-videos");

module.exports = withVideos();

// module.exports = withVideos({
//   compiler: {
//     // ssr and displayName are configured by default
//     styledComponents: true,
//   },
// });