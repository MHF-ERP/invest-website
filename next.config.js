/** @type {import('next').NextConfig} */
module.exports = {
  compiler: {
    removeConsole: false,
  },
  images: {
    domains: [
      "*",
      "flagcdn.com",
      "127.0.0.1",
      "api.naqiconcepts.com",
      "financialmodelingprep.com",
      "cdn.snapi.dev",
    ], // Add the hostname(s) here
  },
};
