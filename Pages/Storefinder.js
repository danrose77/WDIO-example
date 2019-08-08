import Page from './Page'
import Screenshot from "../functions/Screenshot";

class Storefinder extends Page {
    get Store_search() {
        return $("//input[@id='store_locator_address']");
    }

    get Store_search_submit() {
        return $("//input[@class='btn btn-primary']");
    }

    get Store_search_1st_Result() {
        return $("//div[@id='nearest-stores']//ul//li[1]");
    }

    get SorryMessage() {
        return $("//div[@class='lightfaceMessageBox']");
    }

    get StoreHeader() {
        return $$("#nearest-stores > ul > li > h2");
    }

    get StoreInfoHeader() {
        return $("//div[@class='store-info']/h2");
    }

    get store_locator__input() {
        return $(".store-locator__input");
    }
    get nearest_stores() {
        return $("//div[@id='nearest-stores']/ul/li[1]");
    }
    get store_info() {
        return $(".store-info");
    }

    // Functions
    findTheNearestStoreTo(location) {
        if (siteSuffix === "us") {
            global.sitePrefix = "US";
        }
        if (sitePrefix === "co") {
            this.Store_search.setValue(location);
            this.Store_search_submit.click();
            browser.pause(1500);
        } else {
            console.log("Storefinder tests only run for UK regions at present.")
        }
    }

    isTheNearestStore(expectedResult) {
        let sitePrefix = this.returnPrefix();
        if (sitePrefix === "co") {
            let topResult = this.Store_search_1st_Result.getHTML(false);
            expect(topResult).to.include(expectedResult);
        }
    }

    searchForAStoreInCountry() {
        this.Store_search.setValue(country);
        this.Store_search_submit.click();
        browser.pause(2500);
        Screenshot.viewport();
    }

    noStoresFound() {
        let sorryText = this.SorryMessage.getHTML(false);
        expect(sorryText).to.equal("Sorry. Unable to find your location. Try another search");
    }

    clickResult(resultNumber) {
        let storeLink = this.StoreHeader[resultNumber];
        let storeName = storeLink.getHTML(false);
        storeLink.click();
        let storeInfoName = this.StoreInfoHeader.getHTML(false);
        expect(storeInfoName).to.equal(storeName);
    }

}

export default new Storefinder();
