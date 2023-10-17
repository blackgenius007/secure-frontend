const path = require('path');
const { addWebpackAlias } = require('customize-cra');

module.exports = function override(config, env) {
  // Add the alias for the "stream" module
  config = addWebpackAlias({
    stream: 'stream-browserify',
  })(config);

  return config;
};
