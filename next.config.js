/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    domains: ["127.0.0.1"],
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
