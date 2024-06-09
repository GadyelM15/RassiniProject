const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://132.147.1.24:8300/ediRassini/Productive.edi',
      changeOrigin: true,
    })
  );
};