import Page from '../Page'
import * as yaml from "js-yaml";
import Screenshot from "../../functions/Screenshot";
import write from "../../functions/write";
import home from "./home";
import results from "./results";

class shoppingbag extends Page {
    get basket_rows() {
        return $$("div.basket-row");
    }
    get update() {
        return $(".update-all-button");
    }
    get createOrder() {
        return $(".orange-button");
    }
    get orderRef() {
        return $(".basket-po-ref-text");
    }
    get createOrder2() {
        return $("//button[contains(text(),'Create Order')]");
    }
    get toast() {
        return $("//div[@class='toast-message']");
    }

    get tableRowSelector() {
      return $$(".basket .accordion-content .basket-row div div table");
    }
    get grand_total() {
        return $$("div[class='grand-total'] span");
    }
    get allDivSizeSelectors() {
        return $$("div[class='sizes-container col-lg-6 col-md-6 col-sm-12 col-xs-12 col-lg-pull-4 col-md-pull-5'] div div[class*='size-box']:not([class*='size-box out-of-stock']) span:nth-child(1)");
    }
    get allDivInputSelectors() {
        return $$("div[class='sizes-container col-lg-6 col-md-6 col-sm-12 col-xs-12 col-lg-pull-4 col-md-pull-5'] div div[class*='size-box']:not([class*='size-box out-of-stock']) input");
    }

    get allDivAvailabilitySelectors() {
        return $$("div[class='sizes-container col-lg-6 col-md-6 col-sm-12 col-xs-12 col-lg-pull-4 col-md-pull-5'] div div[class*='size-box']:not([class*='size-box out-of-stock']) span:nth-child(3)");
    }
    get allTableAvailabilitySelectors() {
        return $$(".basket .accordion-content .basket-row div div table tbody tr td[class*='size-box']:not([class*='size-box out-of-stock']) input");
    }


    // Functions
    getRandomSizes() {
        let lengthOfSelectors = this.allDivInputSelectors.length;
        let arrayCounter = 0;
        while (arrayCounter !== lengthOfSelectors) {
            let availability = this.allDivAvailabilitySelectors[arrayCounter].getHTML(false);
            availability = availability.slice(1,-1);
            let currentAvailableLastChar = availability.slice(-1);
            if (currentAvailableLastChar === '+') {
                availability = availability.slice(0,-1);
            }
            availability = parseInt(availability);
            if (availability !== 1) {
                availability--;
            }
            let randomNumberAvail = Math.floor(Math.random() * availability);
            if (randomNumberAvail < 1) {
                randomNumberAvail = 1;
            }
            this.allDivInputSelectors[arrayCounter].setValue(randomNumberAvail);
            arrayCounter++;
        }
        // Handle items in a table with quantity in box eg: Jeans
        let rowcount = this.tableRowSelector.length;
        console.log('rowcount = ' + rowcount);
        if (rowcount !== 0) {
            let lengthOfSelectors = this.allTableAvailabilitySelectors.length;
            let arrayCounter = 0;
            while (arrayCounter !== lengthOfSelectors) {
                let availability = this.allTableAvailabilitySelectors[arrayCounter].getAttribute('placeholder');
                availability = availability.slice(1,-1);
                if (availability !== 'null') {
                    let currentAvailableLastChar = availability.slice(-1);
                    if (currentAvailableLastChar === '+') {
                        availability = availability.slice(0,-1);
                    }
                    availability = parseInt(availability);
                    if (availability !== 1) {
                        availability--;
                    }
                    let randomNumberAvail = Math.floor(Math.random() * availability);
                    if (randomNumberAvail < 1) {
                        randomNumberAvail = 1;
                    }
                    this.allTableAvailabilitySelectors[arrayCounter].setValue(randomNumberAvail);
                }
                arrayCounter++;
            }
        }
    }
    getRandomSizesAndUpdateBag() {
        this.getRandomSizes();
        let startbagVal = this.grand_total[1].getHTML(false);
        startbagVal = parseInt(startbagVal.slice(1,-3));
        this.update.click();
        let bagVal = this.grand_total[1].getHTML(false);
        bagVal = parseInt(bagVal.slice(1,-3));
        let counter = 0;
        while (bagVal === startbagVal) {
            browser.pause(5000);
            bagVal = this.grand_total[1].getHTML(false);
            bagVal = parseInt(bagVal.slice(1,-3));
            counter++;
            if (counter === 12) {
                break;
            }
        }
        console.log("bagval = " + bagVal);
        return bagVal;
    }

    addASelectionOfSizesForProducts() {
        browser.pause(2000);
        Screenshot.viewport();
        let bagVal = this.getRandomSizesAndUpdateBag();
        while (bagVal < 250) {
            browser.pause(2000);
            home.getRandomProductSection();
            browser.pause(2000);
            results.multiSelectProducts(1);
            home.goToShoppingBag();
            browser.pause(2000);
            bagVal = this.getRandomSizesAndUpdateBag();
        }
        Screenshot.viewport();
    }
    create_order() {
        this.orderRef.setValue("Automation");
        this.createOrder.waitForDisplayed(30000);
        this.createOrder.waitForEnabled(30000);
        this.createOrder.click();
        this.createOrder2.waitForDisplayed(30000);
        this.createOrder2.waitForEnabled(30000);
        this.createOrder2.click();
        this.toast.waitForDisplayed(30000);
        this.toast.waitForDisplayed(30000,true)
    }
}

export default new shoppingbag();
