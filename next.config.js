/** @type {import('next').NextConfig} */
module.exports = {
  compiler: {},
  images: {
    domains: [
      "*",
      "cdn.benzinga.com",
      "flagcdn.com",
      "127.0.0.1",
      "localhost",
      "images.financialmodelingprep.com",
      "api.naqiconcepts.com",
      "financialmodelingprep.com",
      "cdn.snapi.dev",
    ], // Add the hostname(s) here
  },
};
