/** @type {import('next').NextConfig} */
module.exports = {
  compiler: {
    removeConsole: true,
  },
  images: {
    domains: [
      "*",
      "cdn.benzinga.com",
      "flagcdn.com",
      "127.0.0.1",
      "api.naqiconcepts.com",
      "financialmodelingprep.com",
      "cdn.snapi.dev",
    ], // Add the hostname(s) here
  },
};
