const withPWA = require('next-pwa');

module.exports = withPWA({
  pwa: {
    register: true,
    skipWaiting: true,
  },
});
