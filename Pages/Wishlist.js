import Page from './Page'
import objectLength from "../functions/objectLength";

class Storefinder extends Page {
  get moveToBag()               {return $$("input.moveto-bag");}
  get itemHeaders()               {return $$("div >h3");}

  // Functions
  moveItemToBag(itemNumber) {
    if (itemNumber === undefined) {
      let moveToBagLink = this.moveToBag;
      moveToBagLink[0].click();
    } else {
      let moveToBagLink = this.moveToBag;
      itemNumber = itemNumber - 1;
      moveToBagLink[itemNumber].click();
    }
    browser.pause(1000);
  }
  numberOfItemsInWishlist(expectedToBe) {
    let countHeaders = objectLength.element(this.itemHeaders);
    expect(countHeaders).to.equal(expectedToBe);
  }
}

export default new Storefinder();
