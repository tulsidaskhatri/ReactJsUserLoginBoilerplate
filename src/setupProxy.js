const {createProxyMiddleware} = require('http-proxy-middleware');

// Defaults to staging if no env variable is present
const baseUrl = 'http://localhost:7000';

module.exports = function (app) {
    app.use(
        createProxyMiddleware('/api', {
            target: baseUrl,
            stream: false,
            changeOrigin: true,
            pathRewrite: {
                '/api': '/',
            },
            logLevel: 'debug',
        })
    );
};
