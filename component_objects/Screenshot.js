import Page from './Page'

class Screenshot extends Page {
  viewport() {
    const fs = require('fs');

    const mkdirSync = (dirPath) => {
      try {
        fs.mkdirSync(dirPath);
      } catch (err) {
        if (err.code !== 'EEXIST') { throw err; }
      }
    };
    const screendate = new Date();
    let month = screendate.getMonth();
    month = month + 1;
    mkdirSync("./reports/");
    mkdirSync("./reports/" + screendate.getDate() + "_" + month + "_" + screendate.getFullYear() + "/");
    mkdirSync("./reports/" + screendate.getDate() + "_" + month + "_" + screendate.getFullYear() + "/" + specname + "/");
    mkdirSync("./reports/" + screendate.getDate() + "_" + month + "_" + screendate.getFullYear() + "/" + specname + "/" + runStartTime + "/");

    var screenshotFolder = "./reports/" + screendate.getDate() + "_" + month + "_" + screendate.getFullYear() + "/" + specname + "/" + runStartTime + "/";
    var screenshotpath = screenshotFolder+screendate.getTime()+".png";
    browser.saveScreenshot(screenshotpath);
  }
}

export default new Screenshot();
