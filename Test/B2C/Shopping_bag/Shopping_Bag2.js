import Environment from '../../../Pages/B2C/Environment.js';
import Product from '../../../Pages/B2C/Product.js';
import Search from '../../../Pages/B2C/Search.js';
import Navigation from '../../../Pages/B2C/Navigation.js';
import ShoppingBag from "../../../Pages/B2C/ShoppingBag";

let Qty1 = 1;
let Qty2 = 2;
let Qty3 = 3;
let Qty4 = 4;
let Qty5 = 5;
let Qty6 = 6;

describe('A product can be added from the shopping bag', () => {
    it('Open the environment', () => {
        Environment.openBaseURL();
    });
    it('Go to a random section and return a product and add it to the bag', () => {
        Navigation.randomSection();
        Search.PickRandomProduct();
        Product.SelectASizeAndAddTo('Bag');
    });
    it('Item quantity can be increased (by '+Qty2+') in the shopping bag', () => {
        ShoppingBag.increaseShoppingBagItems(Qty2)
    });
});
