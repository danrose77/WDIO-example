const master = require("../wdio.conf");
const {join} = require('path');

let screendate = new Date();
let month = screendate.getMonth() + 1;
let dateString = screendate.getFullYear() + "_" + month + "_" + screendate.getDate();

exports.config = Object.assign(master.config, {
  services: ["selenium-standalone",
    ['image-comparison', {
      baselineFolder: join(process.cwd(), './Reports/Visual_Regression_Local/Baseline/'),
      formatImageName: '{tag}-{width}x{height}',
      screenshotPath: join(process.cwd(), './Reports/Visual_Regression_Local/'+dateString+'/'),
      savePerInstance: true,
      autoSaveBaseline: true,
      blockOutStatusBar: true,
      blockOutToolBar: true,
    }]
  ],
  specs: ["Test/**/*.js"],
  logLevel: 'error',
  maxInstances: 2,
});
