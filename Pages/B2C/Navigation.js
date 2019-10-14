import Page from '../Page'
import objectLength from '../../functions/objectLength'
import Search from "./Search";
import Screenshot from "../../functions/Screenshot";
import GetRandom from "../../functions/GetRandom";
import write from "../../functions/write";
import Checkout from "./Checkout";
import Product from "./Product";

class Navigation extends Page {
    get OrderSummary() {
        return $("[class='col-12 consignment pad-v']");
    }
    get basket_icon() {
        return $(".account-actions .js-basket-item-count");
    }

    get basket_item_image() {
        return $$("//div[@id='basket-content']/div[@class='basket-item js-basket-item']/div[@class='item-image']");
    }
    get checkout_submit() {
        return $("//a[@id='checkout-submit']");
    }
    get checkout_section_giftcard_voucher() {
        return $("#checkout-section-giftcard-voucher");
    }

    get checkout_section_basket_summary() {
        return $("#checkout-section-basket-summary");
    }

    get checkout_section_delivery_options() {
        return $("#checkout-section-delivery-options");
    }

    get checkout_section_billing_address() {
        return $("#checkout-section-billing-address");
    }

    get checkout_section_payment_methods() {
        return $("#checkout-section-payment-methods");
    }

    get body() {
        return $("body");
    }

    get hamburger() {
        return $('//i[@class="custom-icon burger"]');
    }

    get menu_tier1() {
        return $$('#menu-items > li > a > span.cr-table > span > img');
    }

    get menu_subtiers() {
        return $$("ul[style*='display']:not([style*='display: none;']) li a");
    }

    get menu_subtier1_back() {
        return $(".js-menu .nav-categories:nth-of-type(2) .go-back .cr-cell");
    }

    get menu_subtier2_back() {
        return $(".js-menu .categories-text:nth-of-type(3) .go-back .cr-cell");
    }

    get RD2019_shoppingBagIcon() {
        return $("//div[contains(@class,'account-actions banner-column')]//li[4]//a");
    }

    get SignIn_Guest() {
        return $('a[class$=register-link]');
    }

    get wishlistLinks() {
        return $$("//i[@class='custom-icon favourites']");
    }

    get WishlistLoad() {
        return $('.send-wish-list');
    }

    get closeBasket() {
        return $('div.close-basket > a > i');
    }

    get acceptCookies() {
        return $("//a[@class='cc-btn cc-allow']");
    }

    get logo() {
        return $(".logo");
    }

    get my_account() {
        return $(".account-actions .my-account");
    }

    get favourites() {
        return $(".account-actions .favourites");
    }

    get search_container() {
        return $(".banner-column .search-container i");
    }

    get navWrapper() {
        return $(".nav-wrapper");
    }

    get spinner() {
        return $(".spinner");
    }

    get copyright_row() {
        return $(".copyright-row");
    }

    // Functions
    acceptCookiesPrompt() {
        try {
            if (this.acceptCookies.isDisplayed() === true) {
                this.acceptCookies.click();
            }
        } catch (e) {
        }
    }

    openShoppingBasket() {
        let basketOpen = this.closeBasket.isDisplayed();
        if (basketOpen === false) {
            this.RD2019_shoppingBagIcon.click();
        }
    }

    backToBaseMenu() {
        browser.pause(1000);
        let T2_menu_displayed = this.menu_subtier2_back.isDisplayed();
        if (T2_menu_displayed === true) {
            this.menu_subtier2_back.click();
        }
        browser.pause(1000);
        let T1_menu_displayed = this.menu_subtier1_back.isDisplayed();
        if (T1_menu_displayed === true) {
            this.menu_subtier1_back.click();
        }
    }

    specificSection(tier1, tier2, tier3) {
        this.hamburger.click();
        this.acceptCookiesPrompt();
        try {
            this.backToBaseMenu();
        } catch (e) {
            console.log("Couldnt/or no need to return to main menu")
        }
        this.menu_tier1[1].waitForExist();
        GetRandom.element(this.menu_tier1, undefined, 1, tier1);
        this.menu_subtiers[1].waitForExist();
        GetRandom.element(this.menu_subtiers, undefined, 1, tier2);
        if (tier3 !== undefined) {
            try {
                this.menu_subtiers[1].waitForExist();
                browser.pause(1000);
                if (this.menu_subtiers[1].isDisplayed() === true) {
                    GetRandom.element(this.menu_subtiers, undefined, 1, tier3);
                }
            } catch (e) {
            }
        }
        browser.pause(1000);
        this.spinner.waitForExist(30000, true);
        Screenshot.viewport();
    }

    randomSection() {
        Screenshot.viewport();
        let success = false;
        while (success === false) {
            this.hamburger.waitForDisplayed(30000);
            this.hamburger.click();
            this.acceptCookiesPrompt();
            try {
                this.backToBaseMenu();
            } catch (e) {
                console.log("Couldnt/or no need to return to main menu")
            }
            this.menu_tier1[1].waitForExist();
            GetRandom.element(this.menu_tier1, undefined, 2, 1);
            this.menu_subtiers[1].waitForExist();
            GetRandom.element(this.menu_subtiers, undefined, 4, 2);
            try {
                this.menu_subtiers[1].waitForExist();
                if (this.menu_subtiers[1].isDisplayed() === true) {
                    GetRandom.element(this.menu_subtiers, undefined, 4, 1);
                }
            } catch (e) {

            }

            this.spinner.waitForExist(30000, true);

            let classAttrib = this.body.getAttribute('class').trim();
            console.log('classAttrib = ' + classAttrib);
            if ((classAttrib === 'error-page sana') || (classAttrib === 'error-page sana two-tone')) {
                browser.url(site);
                browser.waitUntil(() => browser.getUrl().includes(site));
                success = false;
            } else {
                let count = Search.ResultsLinks.length;
                success = !((count === undefined) || (count === 0));
            }
        }
        Screenshot.viewport();
    }

    GoToCheckout() {
        this.acceptCookiesPrompt();
        this.basket_icon.waitForDisplayed(30000);
        this.basket_icon.click();

        // Check basket contains items:
        console.log("basket_item_image - " + this.basket_item_image.length);
        while (this.basket_item_image.length < 1) {
            browser.pause(250);
            this.closeBasket.click();

            this.randomSection();
            Search.PickRandomProduct();
            Product.SelectASizeAndAddTo('Bag');
            this.acceptCookiesPrompt();
            this.basket_icon.waitForDisplayed(30000);
            this.basket_icon.click();
        }

        this.checkout_submit.waitForDisplayed(30000);
        this.checkout_submit.click();
        browser.waitUntil(() => {
            return browser.getUrl().includes("checkout");
        }, 30000);
        Screenshot.viewport();
        try {
            if (this.SignIn_Guest.isExisting() === true) {
                this.SignIn_Guest.click();
            }
            Checkout.deliveryTypeOptions[1].waitForExist(30000);
        } catch (e) {
        }
    }

    GoToWishlist() {
        let wishlistLink = this.wishlistLinks;
        wishlistLink[0].click();
        this.WishlistLoad.waitForDisplayed(60000)
    }
}

export default new Navigation();
