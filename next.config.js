/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    domains: ["179.61.219.117"],
  },
  async rewrites() {
    return [
      {
        source: "/home",
        destination: "/home",
      },
    ];
  },
  async middleware(req, res, next) {
    await __middleware(req, res, next);
  },
};
