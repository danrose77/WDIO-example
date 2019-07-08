import Page from './Page'
import {expect} from 'chai';
import Screenshot from '../functions/Screenshot';
import GetRandom from "../functions/GetRandom";
import ShoppingBag from "./ShoppingBag";
import Navigation from "./Navigation";
import Search from "./Search";

class Product extends Page {
  get ProductTitle() {
    return $('h1.col-12.product-description.lg-first:nth-child(1)');
  }

  get ProductTitleMobile() {
    return $('//h1[@class="product-name"]');
  }

  get ProductPrice() {
    return $('div.product-price.col-12.lg-first:nth-child(2)');
  }

  get FreeDelAndRetLink() {
    return $('div.free-delivery.delivery.col-12.lg-first');
  }

  get ModelDetails() {
    return $('div.col-12.product-meta-data.lg-first');
  }

  get SizeContainer() {
    return $('div.size-container');
  }

  get AddToBagButton() {
    return $('#add-to-bag-mob > div > fieldset > input');
  }

  get WishListButton() {
    return $('#add-to-bag-mob > div > fieldset > div > span');
  }

  get ProductDescription() {
    return $('div.col-12.description-container');
  }

  get YouMightAlsoLike() {
    return $('div.col-12.why-not-try-container > div');
  }

  get SocialLinks() {
    return $('div.col-12.col-md-6.col-lg-7.image-gallery.left-hand-column > div.row > div');
  }

  get ProductInfo() {
    return $('div.product_information_container.d-none.d-md-block > div');
  }

  get ProductImages() {
    return $('div.images_container > div');
  }

  get AddToBagButtons() {
    return $$('fieldset > input');
  }

  get atbSizeSelectorModal() {
    return $('#atb-size-selector-modal');
  }

  get wlSizeSelectorModal() {
    return $('#wl-size-selector-modal');
  }

  get wlSizeSelectorDD() {
    return $('#wl-size-selector-modal > div > div > div.modal-body.row > div.col-12.col-md-7 > select');
  }

  get wlSizeSelectorDDoptions() {
    return $('#wl-size-selector-modal > div > div > div.modal-body.row > div.col-12.col-md-7 > select > option');
  }

  get ATBSizeSelectorDD() {
    return $("//div[contains(@class,'size-container dropdown')]//select[contains(@name,'size-dropdown')]");
  }

  get ATBSizeSelectorDDoptions() {
    return $('#atb-size-selector-modal > div > div > div.modal-body.row > div.col-12.col-md-7 > div > select > option');
  }

  get SizeSelectorDD() {
    return $('#add_to_bag_desktop > div.size-container.dropdown > div.size-dropdown-container > select');
  }

  get SizeSelectorDDoptions() {
    return $('#add_to_bag_desktop > div.size-container.dropdown > div.size-dropdown-container > select > option');
  }
  get SizeBoxText() {
    return $('.size-text');
  }
  get SizeBoxValid() {
    return $$('div.size-box-container:not([class$=hidden]) > div.size-box:not([class$="size-box invalid"])');
  }
  get SizeBoxOnesize() {
    return $('div.size-box-container > div.size-box:not([class$=onesize])');
  }

  get ATBSizeBoxValid() {
    return $$('#atb-size-selector-modal > div > div > div.modal-body.row > div.col-12.col-md-7 > div > div > div.size-box');
  }

  get WLSizeBoxValid() {
    return $$('#wl-size-selector-modal > div > div > div.modal-body.row > div.col-12.col-md-7 > div > div.size-box');
  }

  get SizeModal_addtowishlist() {
    return $('div.wishlist-button button modal-cta');
  }

  get sizeDropdownContainer() {
    return $('div[class|=size-dropdown]');
  }

  get sizeBoxContainer() {
    return $('div[class|=size-box]');
  }

  skuObject(No, Quantity, SHIPNODE_KEY, PRIME_LINE_NO, SHIP_ADVICE_NO) {
    this.No = No;
    this.Quantity = Quantity;
    this.SHIPNODE_KEY = SHIPNODE_KEY;
    this.PRIME_LINE_NO = PRIME_LINE_NO;
    this.SHIP_ADVICE_NO = SHIP_ADVICE_NO;
  }

  logUsedSKU(SKU) {
    skuslist[skuslist.length] = new this.skuObject(SKU, "", "", "", "");
  }

  SelectASizeAndAddTo(addTo, numberToAdd, OMS) {
    // Size check

    if (formFactor === 'mobile') {
      browser.pause(5000);
    } else {
      this.ProductTitle.waitForDisplayed();
    }
    let sizeBoxHTML = this.SizeBoxText.getHTML(false).trim();
    while (sizeBoxHTML === "Sorry, this item is currently out of stock."){
      Navigation.randomSection();
      Search.PickRandomProduct();
      sizeBoxHTML = this.SizeBoxText.getHTML(false).trim();
    }

    if ((OMS === false) || (OMS === undefined)) {
      browser.pause(3000);
      if (this.SizeBoxValid.length > 0) {
        if (this.SizeBoxOnesize.length === undefined) {
          GetRandom.sizeBox(this.SizeBoxValid);
        }
      } else if (this.SizeSelectorDD.isDisplayed() === true) {
        GetRandom.selectByIndex(this.SizeSelectorDD, this.SizeSelectorDDoptions)
      }
    }
    browser.pause(1000);
    Screenshot.viewport();
    // ATB
    if (addTo === 'Bag') {
      let ATBbutton = this.AddToBagButtons;
      if (numberToAdd === undefined) {
        ATBbutton[0].click();
      } else {
        let counter = 1;
        while (counter <= numberToAdd) {
          ATBbutton[0].click();
          counter = counter + 1;
          browser.pause(1200);
          ShoppingBag.closeBasket.click();
          browser.pause(1200);
        }
      }
    } else if (addTo === 'Wishlist') {
      let WLbutton = this.WishListButton;
      WLbutton.click();
    }
    Screenshot.viewport();
    let ATBmodalDetector = this.atbSizeSelectorModal.getAttribute('class');
    let WLmodalDetector = this.wlSizeSelectorModal.getAttribute('class');

    Screenshot.viewport();
    browser.pause(1000);
    if (ATBmodalDetector === 'modal fade size-select-modal show') {
      if (this.ATBSizeBoxValid.length > 0) {
          GetRandom.sizeBox(this.ATBSizeBoxValid);
      } else if (this.ATBSizeSelectorDD.isDisplayed() === true) {
        GetRandom.selectByIndex(this.ATBSizeSelectorDD, this.ATBSizeSelectorDDoptions)
      }
      browser.pause(500);
      let ATBbutton = this.AddToBagButtons;
      ATBbutton[1].click();
    } else if (WLmodalDetector === 'modal fade size-select-modal show') {
      if (this.WLSizeBoxValid.length > 0) {
        GetRandom.sizeBox(this.WLSizeBoxValid);
      } else if (this.wlSizeSelectorDD.isDisplayed() === true) {
        GetRandom.selectByIndex(this.wlSizeSelectorDD, this.wlSizeSelectorDDoptions)
      }
      browser.pause(500);
      this.SizeModal_addtowishlist.click();
    }
    Screenshot.viewport();
    browser.pause(1500);
  }
}
export default new Product();
