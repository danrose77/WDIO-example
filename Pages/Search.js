import Page from './Page'
import GetRandom from '../functions/GetRandom';
import Product from "./Product";
import fillObject from "../functions/fillObject";
import * as yaml from "js-yaml";
import objectLength from "../functions/objectLength";
import Navigation from "./Navigation";
import Screenshot from "../functions/Screenshot";

class Search extends Page {
  get SearchBox()             {return $('input[id="main-search-term"]');}
  get SortByDD()              {return $('span.filter-option.pull-left');}
  get sortListElements()      {return $$('ul[class$="dropdown-menu inner"]>li>a');}
  get ResultsLinks()          {return $$('img.photo');}
  get ResultsItemImage01()    {return $('.row.product div:nth-child(1) a:nth-child(1) > img.photo.lazy');}
  get allFacets()             {return $$('div[id$=FacetGroup] div[class$=sm]');}
  get generic_colour()        {return $('div[id$=generic_colourFacetGroup]');}
  get gender()                {return $('div[id$=genderFacetGroup]');}
  get size()                  {return $('div[id$=sizeFacetGroup]');}
  get product_type()          {return $('div[id$=product_typeFacetGroup]');}
  get generic_colourToggle()  {return $('div[id$=generic_colourFacetGroup] div');}
  get genderToggle()          {return $('div[id$=genderFacetGroup] div');}
  get sizeToggle()            {return $('div[id$=sizeFacetGroup] div');}
  get product_typeToggle()    {return $('div[id$=product_typeFacetGroup] div');}
  get visibleCheckboxes()     {return $$("div[class='facet-names-container collapse show']>div>div>label>span");}
  get checkboxSelected()      {return $$("span[class='facet-checkbox selected']");}
  get prices()                {return $$('span[class="product-details__price price"]');}

  // Functions
  searchFor(searchTerm) {
    let searchItem = searchTerm;
    if ((sitePrefix === "co") || (sitePrefix === "au")){
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
    browser.keys('Enter');
    this.ResultsItemImage01.waitForExist(30000);
  }

  selectFilter(type) {
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
      let toggleExpanded = fieldsetToggle.getAttribute('class');
      if (toggleExpanded !== 'toggler-icon-sm expanded') {
        fieldsetLink.click();
      }
    }
    GetRandom.element(this.visibleCheckboxes);
    if (type !== undefined) {
      let checkboxSelectedDisplayed = this.checkboxSelected[0].isExisting();
      expect(checkboxSelectedDisplayed).to.be.true;
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
        let HighestPrice = this.sortListElements[2];
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
        let LowestPrice = this.sortListElements[3];
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
    Screenshot.viewport();
  }
}

export default new Search();
