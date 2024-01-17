/** @type {import('next').NextConfig} */
module.exports = {
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
