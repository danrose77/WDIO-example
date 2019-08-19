import Page from '../Page'
import * as yaml from "js-yaml";
import Screenshot from "../../functions/Screenshot";
import write from "../../functions/write";

class results extends Page {
    get item_count_left() {
        return $("//span[@id='item-count-left']/span");
    }
    get Multi_Select() {
        return $("//div[@class='toggle-widget']");
    }
    get product_images() {
        return $$(".product-image");
    }
    // Functions
    multiSelectProducts(numberToAdd) {
        if (this.Multi_Select.isDisplayed() === true) {
            this.Multi_Select.click();
        }
        let numberOfProductsAvailable = this.product_images.length;
        if (numberOfProductsAvailable <= numberToAdd) {
            console.log("Unable to get " + numberToAdd);
            console.log("Category only contains " + numberOfProductsAvailable);
            numberToAdd = numberOfProductsAvailable - 1;
        }
        if (numberOfProductsAvailable === 1) {
            this.product_images[0].click();
        } else {
            let randomNumber = 0;
            let usedRandomNumbers = [randomNumber];
            let ticker = 0;
            while (ticker !== numberToAdd) {
                let gotAValidNumber = false;
                while (gotAValidNumber === false) {
                    randomNumber = Math.floor(Math.random() * numberOfProductsAvailable);
                    if (usedRandomNumbers.includes(randomNumber) === false) {
                        usedRandomNumbers.push(randomNumber);
                        gotAValidNumber = true;
                        this.product_images[randomNumber].click();
                        ticker++;
                    }
                }
            }
            console.log(usedRandomNumbers);
        }
        browser.pause(5000);
    }
}

export default new results();
