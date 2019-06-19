import Page from './Page'

class Environment extends Page {
  get cookieConsent()          {return $('div.cc-window.cc-banner.cc-type-info.cc-theme-block.cc-bottom.cc-color-override-1668554415 > div > a');}

  openBaseURL() {
    browser.deleteCookies();
    browser.url('/');
    site = browser.getUrl();
    environment = browser.getUrl();
    envcol = environment;
    envcol = envcol.split("-");
    envcol = envcol[1];
    envcol = envcol.split(".");
    envcol = envcol[0];
    browser.pause(2000);
    let cookieConsentExist = this.cookieConsent.isDisplayed();
    if (cookieConsentExist === true) {
      this.cookieConsent.click();
    }
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
