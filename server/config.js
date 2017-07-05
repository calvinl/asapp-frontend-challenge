const { NODE_ENV, PORT, APPLICATION_PORT, ASSET_URL } = require('../webpack/constants');
const isDev = NODE_ENV === 'development';
const configFile = isDev ? 'development' : 'production';
const webpackConfig = require(`../webpack/${configFile}`).default;
const applicationPort = PORT || APPLICATION_PORT || 3000;
import packageJson from '../package.json';

if (isDev) {
  require('dotenv-safe').load();
}

export default {
  name: packageJson.name,
  description: packageJson.description,
  version: packageJson.version,

  // launch environment
  port: applicationPort,
  assetUrl: ASSET_URL || webpackConfig.output.publicPath
};
