import Page from './Page'
import {expect} from 'chai';
import Screenshot from '../functions/Screenshot';
import objectLength from "../functions/objectLength";

class ShoppingBag extends Page {
    get closeBasket()       {return $('div.close-basket > a > i');}
    get MyBag()             {return $('#main-menu > div.account-actions.banner-column > div > ul > li:nth-child(3) > a > span');}
    get Quantity()          {return $$('[class|=item-qty] span');}
    get DecreaseQtyCtrl()   {return $$("button.decrease.control i");}
    get IncreaseQtyCtrl()   {return $$("button.increase.control i");}
    get RemoveCtrl()        {return $$("div.basket-item.js-basket-item div.item-data p.remove a");}
    get basketEmpty()       {return $('#basket-empty');}

removeShoppingBagItems(numberToRemove) {
    let basketOpen = this.closeBasket.isDisplayed();
    if (basketOpen === false) {
        this.MyBag.click();
    }
    browser.pause(1000);
    let quantityItem1 = this.Quantity[1];
    let quantityVal1 = quantityItem1.getHTML(false);
    let counter = 1;
    while (counter <= numberToRemove) {
        let control = this.DecreaseQtyCtrl[1];
        control.click();
        browser.pause(1000);
        counter = counter + 1;
    }
    quantityItem1 = this.Quantity[1];
    let quantityVal2 = quantityItem1.getHTML(false);
    quantityVal1 = parseInt(quantityVal1);
    quantityVal2 = parseInt(quantityVal2);
    let endResult = quantityVal1 - numberToRemove;
    expect(quantityVal2).to.equal(endResult);
    Screenshot.viewport();
  }

increaseShoppingBagItems(numberToAdd) {
    let basketOpen = this.closeBasket.isDisplayed();
    if (basketOpen === false) {
        this.MyBag.click();
    }
    browser.pause(1000);
    let quantityItem1 = this.Quantity[1];
    let quantityVal1 = quantityItem1.getHTML(false);
    let counter = 1;
    while (counter <= numberToAdd) {
        let control = this.IncreaseQtyCtrl[1];
        control.click();
        browser.pause(1000);
        counter = counter + 1;
    }
    quantityItem1 = this.Quantity[1];
    let quantityVal2 = quantityItem1.getHTML(false);
    quantityVal1 = parseInt(quantityVal1);
    quantityVal2 = parseInt(quantityVal2);
    let endResult = quantityVal1 + numberToAdd;
    expect(quantityVal2).to.equal(endResult);
    Screenshot.viewport();
}
removeAllShoppingBagItems() {
    let basketOpen = this.closeBasket.isDisplayed();
    if (basketOpen === false) {
        this.MyBag.click();
    }
    browser.pause(1000);
    let control = this.RemoveCtrl[0];
    let controlExists = control.isDisplayed();
    while (controlExists === true) {
        control.click();
        browser.pause(1000);
        control = this.RemoveCtrl[0];
        if (control === undefined) {
            controlExists = false;
        }
    }
    Screenshot.viewport();
    let basketEmpty = this.basketEmpty.getAttribute('style');
    console.log(basketEmpty);
    expect(basketEmpty).to.not.equal("display: none;");
}
expectShoppingBagItemNumberToBe(numberExpected) {
    let basketOpen = this.closeBasket.isDisplayed();
    if (basketOpen === false) {
        this.MyBag.click();
    }
    browser.pause(1000);
    let numberOfLines = objectLength.element(this.Quantity);
    console.log(numberOfLines);
    let counter = 1;
    let total = 0;
    while (counter !== numberOfLines) {
        let quantityItem = this.Quantity[counter];
        let quantityVal = quantityItem.getHTML(false);
        quantityVal = parseInt(quantityVal);
        total = total + quantityVal;
        counter = counter + 1;
    }
    expect(total).to.equal(numberExpected);
}
}

export default new ShoppingBag();
