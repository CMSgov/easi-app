// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)
const cypressOTP = require('cypress-otp');
const wp = require('@cypress/webpack-preprocessor');

module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
  on('task', {
    generateOTP: cypressOTP
  });

  const options = {
    webpackOptions: {
      resolve: {
        extensions: ['.ts', '.js']
      },
      module: {
        rules: [
          {
            test: /\.tsx?$/,
            loader: 'ts-loader',
            options: { transpileOnly: true }
          }
        ]
      }
    }
  };
  on('file:preprocessor', wp(options));

  const newConfig = config;
  newConfig.env.oktaDomain = import.meta.env.OKTA_DOMAIN;
  newConfig.env.username = import.meta.env.OKTA_TEST_USERNAME;
  newConfig.env.password = import.meta.env.OKTA_TEST_PASSWORD;
  newConfig.env.otpSecret = import.meta.env.OKTA_TEST_SECRET;
  newConfig.env.systemIntakeApi = `${
    import.meta.env.VITE_API_ADDRESS
  }/system_intake`;

  return config;
};
