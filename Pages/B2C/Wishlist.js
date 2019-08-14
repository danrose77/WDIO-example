import Page from '../Page'
import objectLength from "../../functions/objectLength";

class Wishlist extends Page {
    get moveToBag() {
        return $$("input.moveto-bag");
    }

    get productImage() {
        return $$(".product__image");
    }

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
        let count = objectLength.element(this.productImage);
        expect(count).to.equal(expectedToBe);
    }
}

export default new Wishlist();
