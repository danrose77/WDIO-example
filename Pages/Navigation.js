import Page from './Page'
import objectLength from '../functions/objectLength'
import Search from "./Search";
import Screenshot from "../functions/Screenshot";
import write from "../functions/write";

class Navigation extends Page {
  get body()                    {return $("body");}
  get hamburger()               {return $('//i[@class="custom-icon burger"]');}
  get menu_tier1()              {return $$('#menu-items > li > a > span.cr-table > span > img');}
  get menu_tier2()              {return $$('#menu-12191 > li > a');}
  get menu_tier3()              {return $$('#menu-12194 > li > a');}
  get menu_tier3_ul()           {return $('#menu-12194');}
  get menu_tier2_ul()           {return $('#menu-12191');}
  get menu_tier3_back()         {return $('#menu-12194 > li.go-back > a > span > span');}
  get menu_tier2_back()         {return $('#menu-12191 > li.go-back > a > span > span');}
  get shoppingBagIcon()         {return $('*[id|=shopping-bag-icon]');}
  get RD2019_shoppingBagIcon()  {return $('#main-menu > div.account-actions.banner-column > div > ul > li:nth-child(3) > a > span');}
  get checkoutNow()             {return $('#main-body > div > div > div.basket-footer > a');}
  get RD2019_checkoutNow()      {return $('a[id$=checkout-submit]');}
  get SignIn_Guest()            {return $('a[class$=register-link]');}
  get MyAccount()               {return $('div.account-actions.banner-column > div > ul > li:nth-child(1) > a > i');}
  get wishlistLinks()           {return $$("//i[@class='custom-icon favourites']");}

  // Functions
  randomSection() {
    let success = false;
    while (success === false) {
      this.hamburger.click();
      browser.pause(500);
      let T2_menu_displayed = this.menu_tier2_ul.getAttribute("style");
      browser.pause(500);
      if (T2_menu_displayed === "display: flow-root; margin-left: 0%; width: 500px; float: left;") {
        this.menu_tier2_back.click();
        browser.pause(500);
      }
      browser.pause(500);
      let T3_menu_displayed = this.menu_tier3_ul.getAttribute("style");
      browser.pause(500);
      if (T3_menu_displayed === "display: flow-root; margin-left: 0%; width: 500px; float: left;") {
        this.menu_tier3_back.click();
        browser.pause(500);
        this.menu_tier2_back.click();
        browser.pause(500);
      }

      // Remove this section and comment in below
      console.log("   ***   ***   ***   - WARNING - Set to always go 'mens' - Not live version! -    ***   ***   ***   ");
      let element = this.menu_tier1[0];
      try{element.click()} catch (e) {}
      browser.pause(500);
      console.log("   ***   ***   ***   - WARNING - Set to always go 'outerwear' - Not live version! -    ***   ***   ***   ");
      element = this.menu_tier2[1];
      try{element.click()} catch (e) {}
      browser.pause(500);
      console.log("   ***   ***   ***   - WARNING - Set to always go 'windcheaters' - Not live version! -    ***   ***   ***   ");
      element = this.menu_tier3[1];
      try{element.click()} catch (e) {}

/*
      GetRandom.element(this.menu_tier1);
      GetRandom.element(this.menu_tier2);
      GetRandom.element(this.menu_tier3);
*/

      browser.pause(2000);
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
    this.RD2019_shoppingBagIcon.click();
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
