import Page from './Page'
import Navigation from "./Navigation";

class Environment extends Page {
  openUSsiteForColour() {
    browser.deleteCookies();
    browser.url('/');
    environment = browser.getUrl();
    envcol = environment;
    envcol = envcol.split("-");
    envcol = envcol[1];
    envcol = envcol.split(".");
    envcol = envcol[0];
    let environmentTemp = "https://com-"+envcol+".nonprod.sd.co.uk/us/";
    browser.url(environmentTemp);
    browser.pause(2000);
    Navigation.acceptCookiesPrompt();
    this.country();
    site = browser.getUrl();
    environment = browser.getUrl();
  }
  openBaseURL() {
    browser.deleteCookies();
    browser.url('/');
    site = browser.getUrl();
    environment = site;
    envcol = environment;
    envcol = envcol.split("-");
    envcol = envcol[1];
    envcol = envcol.split(".");
    envcol = envcol[0];
    browser.pause(2000);
    Navigation.acceptCookiesPrompt();
    this.country();
  }
  goToBasePlus(basePlus) {
    browser.url(basePlus);
    site = browser.getUrl();
    browser.pause(2000);
    this.country();
  }
  openURL(site) {
    browser.url(site);
  }
  country() {
    browser.pause(3000);
    let currentURL = browser.getUrl();
    let httpStart = currentURL.slice(0, 5);
    if (httpStart === "https") {
      sitePrefix = currentURL.slice(8, 10);
    } else {
      sitePrefix = currentURL.slice(7, 9);
    }
    let yaml = require('js-yaml');
    let fs   = require('fs');
    let countryFile = yaml.load(fs.readFileSync('./data/country.yml', 'utf8'));
    country = countryFile[sitePrefix];

    siteSuffix = currentURL.split("/");
    siteSuffix = siteSuffix[3];
    if ((siteSuffix === "be-fr") || (siteSuffix === "ca-fr") || (siteSuffix === "ch-fr")) {
      sitePrefix = "fr";
    } else if (siteSuffix === "ch-de") {
      sitePrefix = "de";
    }else if (siteSuffix === "be-nl") {
      sitePrefix = "nl";
    } else if (siteSuffix === "ca-en") {
      sitePrefix = "co";
    }
    if (siteSuffix === "us") {
      country = "US";
    }
  }
}

export default new Environment();
