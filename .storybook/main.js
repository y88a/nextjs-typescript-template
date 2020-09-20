const path = require('path');
const rootPath = path.resolve(__dirname, '../');

module.exports = {
  webpackFinal: async (baseConfig) => {
    const nextConfig = require('../next.config.js');
    baseConfig.resolve.alias['@'] = rootPath
    baseConfig.resolve.alias['~'] = rootPath

    // merge whatever from nextConfig into the webpack config storybook will use
    return { ...baseConfig };
  },
  stories: [
    '../stories/**/*.stories.mdx', 
    '../components/**/*.stories.@(ts|tsx)'
  ],
  addons: [
    '@storybook/addon-links', 
    '@storybook/addon-essentials', 
    '@storybook/preset-scss'
  ],
}
