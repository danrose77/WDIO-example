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

    get ResultsItemImage01() {
        return $('.row.product div:nth-child(1) a:nth-child(1) > img.photo.lazy');
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
        browser.pause(2000);
        let result = objectLength.element(this.prices);
        let FirstItem = this.prices[0];
        let FirstItemPrice = FirstItem.getHTML(false);
        let LastItem = this.prices[0];
        let LastItemPrice = LastItem.getHTML(false);
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
                browser.pause(3000);
                FirstItem = this.prices[0];
                FirstItemPrice = FirstItem.getHTML(false);
                result = result - 1;
                LastItem = this.prices[result];
                LastItem.scrollIntoView();
                browser.pause(1000);
                LastItemPrice = LastItem.getHTML(false);
                FirstItemPrice = FirstItemPrice.split(".");
                FirstItemPrice = FirstItemPrice[0];
                FirstItemPrice = FirstItemPrice.split("£");
                FirstItemPrice = parseInt(FirstItemPrice[1]);
                LastItemPrice = LastItemPrice.split(".");
                LastItemPrice = LastItemPrice[0];
                LastItemPrice = LastItemPrice.split("£");
                LastItemPrice = parseInt(LastItemPrice[1]);
                try {
                    expect(FirstItemPrice).to.be.at.least(LastItemPrice);
                } catch (e) {
                    console.log("*** WARNING *** Unable to verify price sorting. Please check manually.")
                }
                break;
            case 'Lowest Price':
                let LowestPrice = this.sortListElements[2];
                LowestPrice.click();
                browser.pause(3000);
                FirstItem = this.prices[0];
                FirstItemPrice = FirstItem.getHTML(false);
                result = result - 1;
                LastItem = this.prices[result];
                LastItem.scrollIntoView();
                browser.pause(1000);
                LastItemPrice = LastItem.getHTML(false);
                FirstItemPrice = FirstItemPrice.split(".");
                FirstItemPrice = FirstItemPrice[0];
                FirstItemPrice = FirstItemPrice.split("£");
                FirstItemPrice = parseInt(FirstItemPrice[1]);

                LastItemPrice = LastItemPrice.split(".");
                LastItemPrice = LastItemPrice[0];
                LastItemPrice = LastItemPrice.split("£");
                LastItemPrice = parseInt(LastItemPrice[1]);
                try {
                    expect(LastItemPrice).to.be.at.least(FirstItemPrice);
                } catch (e) {
                    console.log("*** WARNING *** Unable to verify price sorting. Please check manually.")
                }
        }
        browser.pause(1000);
    }

    PickRandomProduct() {
        GetRandom.element(this.ResultsLinks);
        if (formFactor === 'mobile') {
            browser.pause(5000);
        } else {
            browser.pause(3000);
            Product.ProductTitle.waitForDisplayed();
        }
        let sizeBoxHTML = Product.SizeBoxText.getHTML(false).trim();
        while (sizeBoxHTML === "Sorry, this item is currently out of stock.") {
            Navigation.randomSection();
            GetRandom.element(this.ResultsLinks);
            if (formFactor === 'mobile') {
                browser.pause(5000);
            } else {
                browser.pause(3000);
                Product.ProductTitle.waitForDisplayed();
            }
            sizeBoxHTML = Product.SizeBoxText.getHTML(false).trim();
        }
        Screenshot.viewport();
    }
}

export default new Search();
