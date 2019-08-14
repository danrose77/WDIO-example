import Environment from '../../../Pages/B2C/Environment.js';
import Product from '../../../Pages/B2C/Product.js';
import Search from '../../../Pages/B2C/Search.js';
import Navigation from '../../../Pages/B2C/Navigation.js';
import ShoppingBag from "../../../Pages/B2C/ShoppingBag";

let Qty6 = 20;

describe(specname + ' - 20+ products can be added to the shopping bag', () => {
    it('Open the environment', () => {
        Environment.openBaseURL();
    });
    it('Go to a random section and return a product and add (' + (Qty6 + 1) + ') product to the bag', () => {
        Navigation.randomSection();
        Search.PickRandomProduct();
        Product.SelectASizeAndAddTo('Bag');
        ShoppingBag.increaseShoppingBagItems(Qty6);
    });
    it('Expect number of items in bag to be correct (' + (Qty6 + 1) + ')', () => {
        ShoppingBag.expectShoppingBagItemNumberToBe(Qty6 + 1);
    });

});
