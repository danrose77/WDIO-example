import Page from '../Page'
import * as yaml from "js-yaml";
import Screenshot from "../../functions/Screenshot";
import write from "../../functions/write";
import results from "./results";

class home extends Page {
    get top_level_category() {
        return $$("//span[@class='top_level_category']");
    }
    get centre_logo() {
        return $("//img[@class='sd-logo center-block']");
    }
    get categories() {
        return $$("a.category");
    }
    get my_account() {
        return $('#my-account');
    }
    get open_search_button() {
        return $('#open-search-button__js');
    }
    get mini_cart_icon() {
        return $("//div[@class='mini-cart-icon']");
    }
    get mens_categories() {
        return $$(".horizontal-navbar li:nth-child(1) li li a");
    }
    get womens_categories() {
        return $$(".horizontal-navbar li:nth-child(2) li li a");
    }

    // Functions
    goToShoppingBag() {
        this.mini_cart_icon.waitForExist(30000);
        this.mini_cart_icon.waitForEnabled(30000);
        this.mini_cart_icon.click();
    }

    getRandomProductSection() {
        let numberOfTopLevelMenuItems = this.top_level_category.length;
        let categoryFound = false;
        let randomNumber = 0;
        while (categoryFound !== true) {
            randomNumber = Math.floor(Math.random() * numberOfTopLevelMenuItems);

            this.top_level_category[randomNumber].click();
            let category = this.mens_categories;
            if (randomNumber === 1) {
                category = this.womens_categories;
            }
            let numberOfCategories = category.length;
            let randomNumberCategories = Math.floor(Math.random() * numberOfCategories);
            if (category[randomNumberCategories].isDisplayed() === true) {
                //category[randomNumberCategories].click();
                category[randomNumberCategories].click();
                results.item_count_left.waitForExist(30000);
                let itemCountVal = parseInt(results.item_count_left.getHTML(false));
                if (itemCountVal > 0) {
                    console.log('Success with top level = ' + randomNumber + ' and category number = ' + randomNumberCategories);
                    categoryFound = true;
                } else {
                    console.log('No items found with with top level = ' + randomNumber + ' and category number = ' + randomNumberCategories + ' --- Trying again ---');
                    this.centre_logo.click();
                    browser.pause(2000);
                }
            }
        }
    }
}

export default new home();
