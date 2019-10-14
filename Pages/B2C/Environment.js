import Page from '../Page'
import Navigation from "./Navigation";

class Environment extends Page {

    get siteLogoElement() {
        return $('.logo');
    }
    get siteMenuElement() {
        return $('//i[@class="custom-icon burger"]');
    }

    setSite() {
        global.site = browser.getUrl();
        if (browser.getUrl().includes('?')) {
            let siteArray = site.split("/");
            let counter = 0;
            let siteTemp = "";
            while (counter !== siteArray.length - 1) {
                if (counter === 0) {
                    siteTemp = siteArray[counter] + "//";
                } else {
                    siteTemp = siteTemp + siteArray[counter] + "/";
                }
                counter++;
            }
            global.site = siteTemp;
        }
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
        browser.pause(2000);
        this.setSite();
        let environmentTemp = "";
        switch (countryVal) {
            case 'US':
                environmentTemp = "https://com-" + envcol + ".nonprod.sd.co.uk/us/";
                break;
            case 'ES':
                environmentTemp = "https://es-" + envcol + ".nonprod.sd.co.uk/";
                break;
            case 'SE':
                environmentTemp = "https://se-" + envcol + ".nonprod.sd.co.uk/";
                break;
            case 'FI':
                environmentTemp = "https://fi-" + envcol + ".nonprod.sd.co.uk/";
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
            case 'BE':
                environmentTemp = "https://be-" + envcol + ".nonprod.sd.co.uk/be-fr/";
                break;
            case 'FR':
                environmentTemp = "https://fr-" + envcol + ".nonprod.sd.co.uk/";
                break;
            case 'IE':
                environmentTemp = "https://ie-" + envcol + ".nonprod.sd.co.uk/";
                break;
            case 'IT':
                environmentTemp = "https://it-" + envcol + ".nonprod.sd.co.uk/";
                break;
            case 'CH':
                environmentTemp = "https://ch-" + envcol + ".nonprod.sd.co.uk/ch-de/";
                break;
            case 'HK':
                environmentTemp = "https://hk-" + envcol + ".nonprod.sd.co.uk/hk-en/";
                break;
            case 'NO':
                environmentTemp = "https://no-" + envcol + ".nonprod.sd.co.uk/";
                break;
            case 'CAEN':
                environmentTemp = "https://ca-" + envcol + ".nonprod.sd.co.uk/ca-en/";
                break;
            case 'CAFR':
                environmentTemp = "https://ca-" + envcol + ".nonprod.sd.co.uk/ca-fr/";
                break;
            default:
                console.log("No country or invalid country specified - setting to UK");
                environmentTemp = "https://com-" + envcol + ".nonprod.sd.co.uk/";
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
        let screenDate = new Date();
        let urlString = screenDate.getTime();
        browser.url('/?a' + urlString + 'a');
        browser.waitUntil(() => browser.getUrl().includes(urlString));
        browser.deleteCookies();
        Navigation.acceptCookiesPrompt();
        this.setSite();
        this.country();
    }

    goToBasePlus(basePlus) {
        if (country === 'UK') {
            browser.url(basePlus);
        } else {
            browser.url(site + basePlus);
        }

        global.site = browser.getUrl();
        browser.pause(2000);
        this.country();
    }

    openURL(site) {
        browser.url(site);
    }

    country() {
        global.sitePrefix = this.returnPrefix();
        let countryFile = yaml.load(fs.readFileSync('./data/country.yml', 'utf8'));
        global.country = countryFile[sitePrefix];
        global.siteSuffix = this.returnSuffix();
        if (siteSuffix === "us") {
            global.country = "US";
        }
    }
}

export default new Environment();
