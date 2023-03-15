/** @type {import('next').NextConfig} */
const path = require("path");

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")]
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**images.unsplash.com"
      }
    ]
  },
  // for further context: https://www.jussivirtanen.fi/writing/handling-api-rate-limits-with-nextjs
  experimental: {
    workerThreads: false,
    cpus: 1
  }
};
