const master = require("../wdio.conf");

exports.config = Object.assign(master.config, {
  specs: ["Test/**/*.js"],
  logLevel: 'error',
  maxInstances: 5,
  capabilities: [
    {
      "browserName": "chrome",
      "goog:chromeOptions": {
        "args": ["disable-infobars"]
      }
    }
  ],
});
