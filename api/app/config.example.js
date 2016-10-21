var config = module.exports;
module.exports['@literal'] = true;
var PRODUCTION = process.env.NODE_ENV === 'production';

config.express = {
  port: process.env.PXE_API_PORT || 3000,

  // Bind only to localhost.
  // Overridden in production.
  ip: '127.0.0.1'
};

if (PRODUCTION) {
  config.express.ip = '0.0.0.0';
}
