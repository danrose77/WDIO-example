const master = require("../wdio.conf");
const {join} = require('path');
require('dotenv').config();
const merge = require("deepmerge");

let screenDate = new Date();
let month = screenDate.getMonth() + 1;
let dateString = screenDate.getFullYear().toString() + month.toString() + screenDate.getDate().toString();
let buildNo = dateString + "." + screenDate.getHours().toString() + "." + screenDate.getMinutes().toString() + "." + screenDate.getSeconds().toString();

exports.config = merge(master.config, {
  services: ["browserstack"],
  logLevel: 'error',
  maxInstances: 2,
  user: process.env.REMOTE_USER,
  key: process.env.REMOTE_PASSWORD,
  capabilities:
      [
        {'os' : 'Windows', 'os_version' : '10', 'browserName' : 'Chrome', 'resolution' : '1920x1200', 'browserstack.local' : 'false', 'browserstack.debug' : 'true', 'browserstack.geoLocation'  : 'GB', "goog:chromeOptns" : {"args": ["disable-infobars"]}, 'project' : 'WDIO-b2c-test-automation', 'build' : buildNo, 'name' : 'Win10 Chrome'},
        {'os_version': '10', 'device': 'iPhone 7', 'real_mobile' : 'true', 'browserstack.timezone' : 'UK', 'browserstack.local': 'false', 'browserstack.debug': 'true', 'browserstack.geoLocation': 'GB', 'browserstack.appiumVersion': '1.14.0', 'project' : 'WDIO-b2c-test-automation', 'build' : buildNo, 'name': 'iPhone 7'},
        {'os_version': '8.0', 'device': 'Samsung Galaxy S9', 'real_mobile' : 'true', 'browserstack.timezone' : 'UK', 'browserstack.local': 'false', 'browserstack.debug': 'true', 'browserstack.geoLocation': 'GB', 'browserstack.networkLogs': 'true', 'browserstack.appiumVersion': '1.9.1', 'project' : 'WDIO-b2c-test-automation', 'build' : buildNo, 'name': 'Samsung Galaxy S9'},
      ],
});
