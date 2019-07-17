import Page from './Page'
import Navigation from "./Navigation";
import * as yaml from "js-yaml";

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
    openUSsiteForColour() {
        browser.deleteCookies();
        browser.url('/');
        this.setSite();
        let environmentTemp = "https://com-" + envcol + ".nonprod.sd.co.uk/us/";
        browser.url(environmentTemp);
        browser.pause(2000);
        Navigation.acceptCookiesPrompt();
        this.country();
    }
    openBaseURL() {
        browser.deleteCookies();
        let screenDate = new Date();
        browser.url('/?a' + screenDate.getTime() + 'a');
        this.setSite();
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
