import Page from '../Page'
import GetRandom from '../../functions/GetRandom';
import Product from "./Product";
import fillObject from "../../functions/fillObject";
import * as yaml from "js-yaml";
import objectLength from "../../functions/objectLength";
import Navigation from "./Navigation";
import Screenshot from "../../functions/Screenshot";

class Search extends Page {
    get SearchBox() {
        return $('#pop-in-search-term');
    }

    get SearchIcon() {
        return $('#menu-pop-in .search-icon');
    }

    get SortByDD() {
        return $('span.filter-option.pull-left');
    }

    get sortListElements() {
        return $$('ul[class$="dropdown-menu inner"]>li>a');
    }

    get ResultsLinks() {
        return $$('img.photo');
    }

    get allFacets() {
        return $$('div[id$=FacetGroup] div[class$=sm]');
    }

    get refineButton() {
        return $(".refine-category-button");
    }

    get closeRefine() {
        return $(".mob-close");
    }

    get generic_colour() {
        return $("//fieldset[@id='facet:generic_colour']");
    }

    get gender() {
        return $("//fieldset[@id='facet:gender']");
    }

    get size() {
        return $("//fieldset[@id='facet:size']");
    }

    get product_type() {
        return $("//fieldset[@id='facet:product_type']");
    }

    get generic_colourToggle() {
        return $("//fieldset[@id='facet:generic_colour']//div[@class='toggle active']");
    }

    get genderToggle() {
        return $("//fieldset[@id='facet:gender']//div[@class='toggle active']");
    }

    get sizeToggle() {
        return $("//fieldset[@id='facet:size']//div[@class='toggle active']");
    }

    get product_typeToggle() {
        return $("//fieldset[@id='facet:product_type']//div[@class='toggle active']");
    }

    get visibleCheckboxes() {
        return $$('div[style*="visible"] ul li label span[class="checkbox"]');
    }

    get checkboxSelected() {
        return $$("//span[@class='checkbox selected']");
    }

    get prices() {
        return $$('span[class="product-details__price price"]');
    }

    get wasPrices() {
        return $$('.was-price');
    }

    get togglerIcon() {
        return $$('.toggler-icon-sm');
    }

    get checkboxesOnShow() {
        return $$('div[class$="show"] .facet-checkbox');
    }
    get item1PriceIfWasPricePresent() {
        return $("[class='col-6 col-md-4 col-lg-3  ']:nth-of-type(1) [class='price font_bold']");
    }
    get banner_container() {
        return $(".banner-container");
    }
    get category_options_container() {
        return $(".category-options-container");
    }
    get loadMore() {
        return $("//div[@id='product-list']/div[3]");
    }
    get stay_connected() {
        return $("//div[@class='container-fluid stay-connected']");
    }
    // Functions
    searchFor(searchTerm) {
        let searchItem = searchTerm;
        if ((sitePrefix === "co") || (sitePrefix === "au")) {
        } else {
            let translationSheet = yaml.load(fs.readFileSync('./data/translations.yml', 'utf8'));
            let translationList = translationSheet[sitePrefix];
            searchItem = translationList[searchTerm];
            if (searchItem === undefined) {
                console.log("Unable to find translation... sticking with untranslated version");
                searchItem = searchTerm;
            }
        }
        //end translate
        Navigation.hamburger.click();
        browser.pause(500);
        fillObject.element(this.SearchBox, searchItem);
        Screenshot.viewport();
        this.SearchIcon.click();
        Screenshot.viewport();
        browser.pause(5000);
    }

    selectFilterDropDown(menuNumber) {
        // Zero represents the first menu on the left, so for ease of use this is altered below to make first menu 1
        this.togglerIcon[menuNumber - 1].click();
        browser.pause(500);
        GetRandom.element(this.checkboxesOnShow);
        browser.pause(500);
        this.togglerIcon[menuNumber - 1].click();
    }

    selectFilter(type) {
        if (this.refineButton.isDisplayed() === true) {
            this.refineButton.click();
        }
        let fieldsetLink = this.generic_colour;
        let fieldsetToggle = this.generic_colourToggle;
        let skip = false;
        switch (type) {
            case 'colour':
                fieldsetLink = this.generic_colour;
                fieldsetToggle = this.generic_colourToggle;
                break;
            case 'gender':
                fieldsetLink = this.gender;
                fieldsetToggle = this.genderToggle;
                break;
            case 'size':
                fieldsetLink = this.size;
                fieldsetToggle = this.sizeToggle;
                break;
            case 'type':
                fieldsetLink = this.product_type;
                fieldsetToggle = this.product_typeToggle;
                break;
            default:
                GetRandom.element(this.allFacets);
                skip = true;
        }
        if (skip === false) {
            let toggleExpanded = fieldsetToggle.isDisplayed();
            if (toggleExpanded !== true) {
                fieldsetLink.click();
            }
        }
        GetRandom.element(this.visibleCheckboxes);
        if (type !== undefined) {
            let checkboxSelectedDisplayed = this.checkboxSelected[0].isExisting();
            expect(checkboxSelectedDisplayed).to.be.true;
        }
        if (this.closeRefine.isDisplayed() === true) {
            this.closeRefine.click();
        }
    }

    OrderBy(OrderBy) {
        let FirstItemPrice = 0;
        let LastItemPrice = 0;
        browser.pause(2000);
        this.SortByDD.click();
        switch (OrderBy) {
            case 'Most Relevant':
                let MostRelevant = this.sortListElements[0];
                MostRelevant.click();
                break;
            case 'Highest Rated':
                let HighestRated = this.sortListElements[1];
                HighestRated.click();
                break;
            case 'Highest Price':
                let HighestPrice = this.sortListElements[1];
                HighestPrice.click();
                browser.pause(5000);
                FirstItemPrice = this.getFirstPrice();
                LastItemPrice = this.getLastPrice();
                try {
                    expect(FirstItemPrice).to.be.at.least(LastItemPrice);
                } catch (e) {
                    console.log("*** WARNING *** Unable to verify price sorting. Please check manually.")
                }
                break;
            case 'Lowest Price':
                let LowestPrice = this.sortListElements[2];
                LowestPrice.click();
                browser.pause(5000);
                FirstItemPrice = this.getFirstPrice();
                LastItemPrice = this.getLastPrice();
                try {
                    expect(LastItemPrice).to.be.at.least(FirstItemPrice);
                } catch (e) {
                    console.log("*** WARNING *** Unable to verify price sorting. Please check manually.")
                }
        }
        browser.pause(1000);
    }

    getFirstPrice() {
        let FirstItem = this.prices[0];
        FirstItem.scrollIntoView();
        let FirstItemPrice = FirstItem.getHTML(false);
        if (FirstItemPrice === "") {
            FirstItem = this.item1PriceIfWasPricePresent;
            FirstItemPrice = FirstItem.getHTML(false);
        }
        FirstItemPrice = FirstItemPrice.split(".");
        FirstItemPrice = FirstItemPrice[0];
        FirstItemPrice = FirstItemPrice.split("£");
        FirstItemPrice = parseInt(FirstItemPrice[1]);
        return FirstItemPrice;
    }

    getLastPrice() {
        let result = objectLength.element(this.prices);
        result = result - 1;
        let LastItem = this.prices[result];
        LastItem.scrollIntoView();
        browser.pause(1000);
        let LastItemPrice = LastItem.getHTML(false);
        LastItemPrice = LastItemPrice.split(".");
        LastItemPrice = LastItemPrice[0];
        LastItemPrice = LastItemPrice.split("£");
        LastItemPrice = parseInt(LastItemPrice[1]);
        return LastItemPrice;
    }

    PickRandomProduct() {
        GetRandom.element(this.ResultsLinks);
        Product.ProductTitle.waitForDisplayed(30000);
        let sizeBoxHTML = Product.SizeBoxText.getHTML(false).trim();
        while (sizeBoxHTML === "Sorry, this item is currently out of stock.") {
            Navigation.randomSection();
            GetRandom.element(this.ResultsLinks);
            Product.ProductTitle.waitForDisplayed();
            sizeBoxHTML = Product.SizeBoxText.getHTML(false).trim();
        }
        Screenshot.viewport();
    }

    ensureStaffDiscountOnPrices() {
        this.wasPrices[0].waitForDisplayed(10000);
        expect(this.wasPrices[0].isDisplayed()).to.be.true;
        if (this.wasPrices[0].isDisplayed()) {
            this.wasPrices[0].scrollIntoView();
            Screenshot.viewport();
        }
    }
}

export default new Search();
