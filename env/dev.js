export default {
  devServer: {
    host: 'localhost',
    port: 3000,
    // https://webpack.github.io/docs/webpack-dev-server.html#proxy
    // https://github.com/chimurai/http-proxy-middleware#options
    proxy: {
      '/api': {
        target: 'https://other-server.example.com',
        secure: true,
        headers: {
          'Host': 'other-server.example.com',
          'Cookie': '' // send cookie on demand
        },
        pathRewrite(path) {
          return path.replace(/^\/api/, ''); // remove '/api' prefix when requesting
        }
      },
    }
  },
};
