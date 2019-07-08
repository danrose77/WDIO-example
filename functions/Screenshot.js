import Page from '../Pages/Page'

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
    mkdirSync("./reports/" + screendate.getFullYear() + "_" + month + "_" + screendate.getDate() + "/");

    var screenshotFolder = "./reports/" + screendate.getFullYear() + "_" + month + "_" + screendate.getDate() + "/";
    var screenshotpath = screenshotFolder+screendate.getTime()+" - "+specname+" - "+platform+".png";
    browser.saveScreenshot(screenshotpath);
  }
}

export default new Screenshot();
