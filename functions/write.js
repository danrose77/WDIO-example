import Page from '../Pages/Page'
import Screenshot from "./Screenshot";

class write extends Page {
    toTextFile(text) {
        let nl = (process.platform === "win32" ? "\r\n" : "\n");
        let screendate = new Date();
        let month = screendate.getMonth();
        month = month + 1;
        let fileName = "./reports/" + screendate.getFullYear() + "_" + month + "_" + screendate.getDate() + "/test_run_logging_" + screendate.getDate() + "_" + month + "_" + screendate.getFullYear() + ".txt";
        let hour = screendate.getHours();
        hour = "0" + hour;
        hour = hour.slice(-2);
        let minute = screendate.getMinutes();
        minute = "0" + minute;
        minute = minute.slice(-2);

        let currentURL = browser.getUrl();
        let urlArray = currentURL.split("/");
        let shortURL = "";
        let siteSuffix = this.returnSuffix();
        let sitePrefix = this.returnPrefix();

        switch (sitePrefix) {
            case 'be':
            case 'ca':
            case 'ch':
            case 'hk':
                shortURL = urlArray[0] + "//" + urlArray[2] + "/" + urlArray[3];
                break;
            case 'co':
                if (siteSuffix === "us") {
                    shortURL = urlArray[0] + "//" + urlArray[2] + "/" + urlArray[3];
                } else {
                    shortURL = urlArray[0] + "//" + urlArray[2];
                }
                break;
            default:
                shortURL = urlArray[0] + "//" + urlArray[2];
        }
        let fd = fs.openSync(fileName, 'a');
        fs.writeSync(fd, hour + ":" + minute + " - " + specname + " - " + text + " - URL: " + shortURL + nl);
        fs.closeSync(fd);
    }

    timestamp(text) {
        let screendate = new Date();
        let hour = screendate.getHours();
        hour = "0" + hour;
        hour = hour.slice(-2);
        let minute = screendate.getMinutes();
        minute = "0" + minute;
        minute = minute.slice(-2);
        let second = screendate.getSeconds();
        second = "0" + second;
        second = second.slice(-2);
        if (text === undefined) {
            text = ""
        } else {
            text = " - " + text;
        }
        console.log(hour + ":" + minute + ":" + second + text);
        Screenshot.viewport();
    }
}

export default new write();
