const master = require("../wdio.conf");

exports.config = Object.assign(master.config, {
  specs: ["Test/**/*.js"],
  logLevel: 'silent',
  maxInstances: 2,
  services: ['browserstack'],
  user: 'danielrose3',
  key: 'xGL2Yq6PqDqzzVy2J7pQ',
 capabilities: [],
});
