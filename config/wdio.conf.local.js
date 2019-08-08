const master = require("../wdio.conf");

exports.config = Object.assign(master.config, {
  specs: ["Test/**/*.js"],
  logLevel: 'error',
  maxInstances: 5,
  services: ["selenium-standalone"],
  capabilities: [
    {
      "browserName": "chrome",
      "goog:chromeOptions": {
        "args": ["disable-infobars"]
      }
    }
  ],
});
