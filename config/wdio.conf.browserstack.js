const master = require("../wdio.conf");

exports.config = Object.assign(master.config, {
  specs: ["Test/**/*.js"],
  logLevel: 'error',
  reporters: ["spec"],
  maxInstances: 2,
  services: ['browserstack'],
  user: 'danielrose3',
  key: 'xGL2Yq6PqDqzzVy2J7pQ',
 capabilities: [
     /*
    {
        'os' : 'Windows',
        'os_version' : '10',
        'browserName' : 'chrome',
        'resolution' : '1920x1200',
        'browserstack.timezone' : 'UK',
        'browserstack.geoLocation' : 'GB',
        "goog:chromeOptns": {
            "args": ["disable-infobars"]
            }
    },
    {
        'os_version' : '8.0',
        'device' : 'Samsung Galaxy S9',
        'real_mobile' : 'true',
        'browserstack.timezone' : 'UK',
        'browserstack.geoLocation' : 'GB',
        'browserstack.networkLogs' : 'true',
        'browserstack.appiumVersion': '1.9.1',
    },
    {
        'os_version' : '12',
        'device' : 'iPhone XS',
        'real_mobile' : 'true',
        'browserstack.timezone' : 'UK',
        'browserstack.geoLocation' : 'GB',
        'browserstack.appiumVersion': '1.9.1',
    },

    {
        'os' : 'Windows',
        'os_version' : '10',
        'browserName''Edge',
        'browser_version' : '18.0',
        'resolution' : '1920x1200',
        'browserstack.timezone' : 'UK',
        'browserstack.geoLocation' : 'GB',
    },
    {
        'os_version' : '12',
        'device' : 'iPad Pro 12.9 2018',
        'real_mobile' : 'true',
        'browserstack.timezone' : 'UK',
        'browserstack.geoLocation' : 'GB',
        'browserstack.appiumVersion': '1.9.1',
    },
    {
        'os_version' : '8.1',
        'device' : 'Samsung Galaxy Tab S4',
        'real_mobile' : 'true',
        'browserstack.timezone' : 'UK',
        'browserstack.geoLocation' : 'GB',
        'browserstack.networkLogs' : 'true',
        'browserstack.appiumVersion': '1.9.1',
   },
    */
  ],
});
