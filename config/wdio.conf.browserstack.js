const master = require("../wdio.conf");
const {join} = require('path');
require('dotenv').config();

let screendate = new Date();
let month = screendate.getMonth() + 1;
let dateString = screendate.getFullYear() + "_" + month + "_" + screendate.getDate();

exports.config = Object.assign(master.config, {
  services: ["browserstack",['image-comparison',
    // The options
    {
      // Some options, see the docs for more
      baselineFolder: join(process.cwd(), './Reports/Visual_Regression_Browserstack/Baseline/'),
      formatImageName: '{tag}-{width}x{height}',
      screenshotPath: join(process.cwd(), './Reports/Visual_Regression_Browserstack/'+dateString+'/'),
      savePerInstance: true,
      autoSaveBaseline: true,
      blockOutStatusBar: true,
      blockOutToolBar: true,
      // ... more options
    }]],
  logLevel: 'error',
  maxInstances: 2,
  user: process.env.REMOTE_USER,
  key: process.env.REMOTE_PASSWORD,
 capabilities: [],
});
