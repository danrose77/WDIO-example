const master = require("../wdio.conf");

let screendate = new Date();
let month = screendate.getMonth() + 1;
let dateString = screendate.getFullYear() + "_" + month + "_" + screendate.getDate();

exports.config = Object.assign(master.config, {
  specs: ["Test/**/*.js"],
  logLevel: 'error',
  maxInstances: 2,
  user: 'danielrose3',
  key: 'xGL2Yq6PqDqzzVy2J7pQ',
 capabilities: [],
});
