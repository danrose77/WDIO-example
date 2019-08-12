const master = require("../wdio.conf");
const {join} = require('path');

let screendate = new Date();
let month = screendate.getMonth() + 1;
let dateString = screendate.getFullYear() + "_" + month + "_" + screendate.getDate();

exports.config = Object.assign(master.config, {
  services: ["selenium-standalone",['image-comparison',
    // The options
    {
      // Some options, see the docs for more
      baselineFolder: join(process.cwd(), './Visual_Regression/Baseline/'),
      formatImageName: '{tag}-{width}x{height}',
      screenshotPath: join(process.cwd(), './Visual_Regression/'+dateString+'/'),
      savePerInstance: true,
      autoSaveBaseline: true,
      blockOutStatusBar: true,
      blockOutToolBar: true,
      // ... more options
    }]
  ],
  specs: ["Test/**/*.js"],
  logLevel: 'error',
  maxInstances: 5,
});
