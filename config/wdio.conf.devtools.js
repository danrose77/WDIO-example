const master = require("../wdio.conf");

exports.config = Object.assign(master.config, {
  services: ["selenium-standalone",
    ['devtools']
  ],
  specs: ["Test/**/*.js"],
  logLevel: 'error',
  maxInstances: 2,
});
