import Page from './Page'
import objectLength from '../functions/objectLength'
import Search from "./Search";
import Screenshot from "../functions/Screenshot";
import GetRandom from "../functions/GetRandom";
import write from "../functions/write";
import Checkout from "./Checkout";

class Navigation extends Page {
  get body()                    {return $("body");}
  get hamburger()               {return $('//i[@class="custom-icon burger"]');}
  get menu_tier1()              {return $$('#menu-items > li > a > span.cr-table > span > img');}
  get menu_close()                    {return $("#menu-pop-in [title='Close']");}
  get menu_subtiers()              {return $$("ul[style*='display']:not([style*='display: none;']) li a");}
  get menu_subtier1_back()         {return $(".js-menu .nav-categories:nth-of-type(2) .go-back .cr-cell");}
  get menu_subtier2_back()         {return $(".js-menu .categories-text:nth-of-type(3) .go-back .cr-cell");}
  get RD2019_shoppingBagIcon()  {return $("//div[contains(@class,'account-actions banner-column')]//li[4]//a");}
  get RD2019_checkoutNow()      {return $('a[href="checkout/log-in"]');}
  get SignIn_Guest()            {return $('a[class$=register-link]');}
  get MyAccount()               {return $('#main-menu > div.account-actions.banner-column > div > ul > li:nth-child(2) > a > i');}
  get MyAccountMobile()               {return $('#mobile-cta-buttons > a:nth-child(1)');}
  get wishlistLinks()           {return $$("//i[@class='custom-icon favourites']");}
  get closeBasket()       {return $('div.close-basket > a > i');}
  get acceptCookies()       {return $("//a[@class='cc-btn cc-allow']");}

    get testItem()       {return $("h1");}

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
  randomSection() {
    Screenshot.viewport();
    let success = false;
    while (success === false) {
      this.hamburger.click();
      this.acceptCookiesPrompt();
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
      browser.pause(1000);
      GetRandom.element(this.menu_tier1, undefined, 1);
      browser.pause(1000);
      GetRandom.element(this.menu_subtiers, undefined,1,3);
      browser.pause(1000);
      GetRandom.element(this.menu_subtiers, undefined, 1, 3);
      browser.pause(5000);
   
      let classAttrib = this.body.getAttribute('class');
      if (classAttrib === 'error-page sana') {
        browser.url(site);
        browser.pause(3000);
        success = false;
      } else {
        let count = Search.ResultsLinks.length;
        if (count !== 0) {
          success = true;
        } else {
          browser.url(site);
          browser.pause(3000);
          success = false;
        }
      }
    }
    Screenshot.viewport();
  }

  GoToCheckout() {
    browser.url('/checkout/log-in');
    browser.pause(1500);
    Screenshot.viewport();
    try {
      if (this.SignIn_Guest.isExisting() === true) {
        this.SignIn_Guest.click();
      }
      browser.pause(5000);
    } catch(e) {
    }
  }
  GoToWishlist() {
    let wishlistLink = this.wishlistLinks;
    wishlistLink[0].click();
  }
}

export default new Navigation();
