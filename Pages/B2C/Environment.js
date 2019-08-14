import Page from '../Page'
import Navigation from "./Navigation";
import * as yaml from "js-yaml";
import Screenshot from "../../functions/Screenshot";

class Environment extends Page {
    setSite() {
        global.site = browser.getUrl();
        global.environment = global.site;
        let envcol = environment;
        envcol = envcol.split("-");
        envcol = envcol[1];
        envcol = envcol.split(".");
        envcol = envcol[0];
        global.envcol = envcol;
    }
    openCountrySiteForColour(countryVal) {
        browser.deleteCookies();
        browser.url('/');
        this.setSite();
        console.log("Site changed to " + countryVal + " site as specified in script.");
        let environmentTemp = "";
        switch (countryVal) {
            case 'US':
                environmentTemp = "https://com-" + envcol + ".nonprod.sd.co.uk/us/";
                break;
            case 'NL':
                environmentTemp = "https://nl-" + envcol + ".nonprod.sd.co.uk/";
                break;
            case 'PL':
                environmentTemp = "https://pl-" + envcol + ".nonprod.sd.co.uk/";
                break;
            case 'DE':
                environmentTemp = "https://de-" + envcol + ".nonprod.sd.co.uk/";
                break;
            default:
                console.log("No country or invalid country specified");
                break;
        }
        browser.url(environmentTemp);
        browser.pause(2000);
        Navigation.acceptCookiesPrompt();
        this.setSite();
        this.country();
    }

    openBaseURL() {
        browser.url('/');
        this.setSite();
        let screenDate = new Date();
        let urlString = screenDate.getTime();
        browser.url('/?a' + urlString + 'a');
        browser.waitUntil(() => browser.getUrl().includes(urlString));
        browser.deleteCookies();
        browser.pause(2000);
        Navigation.acceptCookiesPrompt();
        this.country();
    }

    goToBasePlus(basePlus) {
        browser.url(basePlus);
        global.site = browser.getUrl();
        browser.pause(2000);
        this.country();
    }

    openURL(site) {
        browser.url(site);
    }

    country() {
        browser.pause(3000);
        global.sitePrefix = this.returnPrefix();
        let yaml = require('js-yaml');
        let fs = require('fs');
        let countryFile = yaml.load(fs.readFileSync('./data/country.yml', 'utf8'));
        global.country = countryFile[sitePrefix];
        global.siteSuffix = this.returnSuffix();
        if (siteSuffix === "us") {
            global.country = "US";
        }
    }
}

export default new Environment();
