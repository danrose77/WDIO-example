const master = require("../wdio.conf");

exports.config = Object.assign(master.config, {
  services: ["selenium-standalone"],
  capabilities: [{
    "browserName": "internet explorer",
    "se:ieOptions": {
      acceptUntrustedCertificates: true,
      "ignoreProtectedModeSettings": true,
      "requireWindowFocus": true,
    },
  }],
  specs: ["Test/**/*.js"],
  logLevel: 'error',
  maxInstances: 5,
});
