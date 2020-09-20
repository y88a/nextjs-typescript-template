const path = require('path')

module.exports = {
  // basePath: '/',
  poweredByHeader: false,
  trailingSlash: true,
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}
