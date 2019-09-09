const master = require("../wdio.conf");
const {join} = require('path');
require('dotenv').config();

let screendate = new Date();
let month = screendate.getMonth() + 1;
let dateString = screendate.getFullYear() + "_" + month + "_" + screendate.getDate();

exports.config = Object.assign(master.config, {
  services: ["browserstack"],
  logLevel: 'error',
  maxInstances: 2,
  user: process.env.REMOTE_USER,
  key: process.env.REMOTE_PASSWORD,
  browserstackLocal: true,
 capabilities: [],
});
