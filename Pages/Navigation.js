import Page from './Page'
import objectLength from '../functions/objectLength'
import Search from "./Search";
import Screenshot from "../functions/Screenshot";
import GetRandom from "../functions/GetRandom";
import write from "../functions/write";

class Navigation extends Page {
  get body()                    {return $("body");}
  get hamburger()               {return $('//i[@class="custom-icon burger"]');}
  get menu_tier1()              {return $$('#menu-items > li > a > span.cr-table > span > img');}
  get menu_subtiers()              {return $$("ul[style~='flow-root;'] > li > a > span > span > span");}
  get menu_subtiers_back()         {return $("ul[style~='flow-root;'] > li.go-back > a > span > span");}
  get RD2019_shoppingBagIcon()  {return $$("//a[@class='a-icon position-relative js-basket-toggle']");}
  get RD2019_checkoutNow()      {return $('a[id$=checkout-submit]');}
  get SignIn_Guest()            {return $('a[class$=register-link]');}
  get MyAccount()               {return $('#main-menu > div.account-actions.banner-column > div > ul > li:nth-child(2) > a > i');}
  get wishlistLinks()           {return $$("//i[@class='custom-icon favourites']");}
  get closeBasket()       {return $('div.close-basket > a > i');}

  // Functions
  openShoppingBasket() {
    let basketOpen = this.closeBasket.isDisplayed();
    if (basketOpen === false) {
      this.RD2019_shoppingBagIcon[0].click();
    }
  }
  randomSection() {
    let success = false;
    while (success === false) {
      this.hamburger.click();
      browser.pause(500);
      let T1_menu_displayed = objectLength.element(this.menu_tier1);
      browser.pause(500);
      if (T1_menu_displayed === undefined) {
        this.menu_subtiers_back.click();
        browser.pause(500);
        T1_menu_displayed = objectLength.element(this.menu_tier1);
        console.log(T1_menu_displayed);
        browser.pause(500);
        if (T1_menu_displayed === undefined) {
          this.menu_subtiers_back.click();
          browser.pause(500);
        }
      }
      console.log("Not production setup! Remove modifiers below before go live!");
      GetRandom.element(this.menu_tier1, undefined, 1);
      browser.pause(500);
      GetRandom.element(this.menu_subtiers, undefined,1,3);
      browser.pause(500);
      GetRandom.element(this.menu_subtiers, undefined, 1, 2);

      browser.pause(3000);
      let classAttrib = this.body.getAttribute('class');
      if (classAttrib === 'error-page sana') {
        browser.url(site);
        browser.pause(3000);
        success = false;
      } else {
        let count = objectLength.element(Search.ResultsLinks);
        if (count !== 0) {
          success = true;
        } else {
          browser.url(site);
          browser.pause(3000);
          success = false;
        }
      }
    }
  }

  GoToCheckout() {
    try{browser.scroll(1,1)} catch(e){}
    this.RD2019_shoppingBagIcon[0].click();
    browser.pause(1500);
    this.RD2019_checkoutNow.click();
    browser.pause(1500);
    let guestLink = this.SignIn_Guest.isExisting();
    if (guestLink === true) {
      this.SignIn_Guest.click();
    }
    Screenshot.viewport();
  }
  GoToWishlist() {
    let wishlistLink = this.wishlistLinks;
    wishlistLink[0].click();
  }
}

export default new Navigation();
