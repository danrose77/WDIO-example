const master = require("../wdio.conf");

exports.config = Object.assign(master.config, {
  services: ["selenium-standalone"],
  specs: ["Test/**/*.js"],
  logLevel: 'error',
  maxInstances: 5,
});
