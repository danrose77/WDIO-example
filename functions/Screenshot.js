import Page from '../Pages/Page'

class Screenshot extends Page {
    viewport(shotname) {
        const fs = require('fs');

        const mkdirSync = (dirPath) => {
            try {
                fs.mkdirSync(dirPath);
            } catch (err) {
                if (err.code !== 'EEXIST') {
                    throw err;
                }
            }
        };
        const screendate = new Date();
        let month = screendate.getMonth();
        month = month + 1;
        mkdirSync("./reports/" + screendate.getFullYear() + "_" + month + "_" + screendate.getDate() + "/");

        let screenshotFolder = "./reports/" + screendate.getFullYear() + "_" + month + "_" + screendate.getDate() + "/";
        let screenshotpath = screenshotFolder + screendate.getTime() + " - " + platform + ".png";
        if (shotname !== undefined) {
            screenshotpath = screenshotFolder + shotname + "_" + screendate.getTime() + " - " + platform + ".png";
        }
        browser.saveScreenshot(screenshotpath);
    }
}

export default new Screenshot();
