const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://109.86.230.100:8000/',
      changeOrigin: true,
    }),
  );
};
