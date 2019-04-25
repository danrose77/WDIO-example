import Page from './Page'

class Search extends Page {
  get body()                  {return $('body');}
  get SearchBox()             {return $('#main-search-term');}
  get SortByDD()              {return $('span.filter-option.pull-left');}
  get submit()                {return $('#search-icon');}
  get MostRelevant()          {return $('div > div > ul > li:nth-child(1) > a > span:nth-child(1)');}
  get HighestRated()          {return $('div > div > ul > li:nth-child(2) > a > span:nth-child(1)');}
  get HighestPrice()          {return $('div > div > ul > li:nth-child(3) > a > span:nth-child(1)');}
  get LowestPrice()           {return $('div > div > ul > li:nth-child(4) > a > span:nth-child(1)');}
  get ResultsLinks()          {return $$('a.product-details__name');}
  get ResultsItemImage01()    {return $('.row.product div:nth-child(1) a:nth-child(1) > img.photo.lazy');}
  // Static functions
  static objectLength(obj) {
    let result = 0;
    for (const prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        result++;
      }
    }
    return result;
  }

  // Functions
  searchFor(searchTerm) {
    this.SearchBox.waitForExist(30000);
    this.SearchBox.setValue(searchTerm);
    this.submit.click();
    this.ResultsItemImage01.waitForExist(30000);
  }
  OrderBy(OrderType) {
    this.SortByDD.click();
    switch (OrderType) {
      case 'Most Relevant':
        this.MostRelevant.waitForExist(30000);
        this.MostRelevant.click();
        break;
      case 'Highest Rated':
        this.HighestRated.waitForExist(30000);
        this.HighestRated.click();
        break;
      case 'Highest Price':
        this.HighestPrice.waitForExist(30000);
        this.HighestPrice.click();
        break;
      case 'Lowest Price':
        this.LowestPrice.waitForExist(30000);
        this.LowestPrice.click();
    }
    browser.pause(1000);
  }
  PickRandomProduct() {
    let linkCheck = false;
    while (!linkCheck) {
      const count = Search.objectLength(this.ResultsLinks);
      const randomNumber = Math.floor(Math.random() * count);
      const element = this.ResultsLinks[randomNumber];
      try {
        element.click();
      } catch (e) {
        browser.pause(250);
      }
      const classAttrib = this.body.getAttribute('class');
      if (classAttrib === 'superdry shop-product_details') {
        linkCheck = true;
      }
    }
  }
}

export default new Search();
