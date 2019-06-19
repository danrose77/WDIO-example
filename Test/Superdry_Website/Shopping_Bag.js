import Environment from '../../Pages/Environment.js';
import Product from '../../Pages/Product.js';
import Search from '../../Pages/Search.js';
import Navigation from '../../Pages/Navigation.js';
import ShoppingBag from "../../Pages/ShoppingBag";

let Qty1 = 1;
let Qty2 = 2;
let Qty3 = 3;
let Qty4 = 4;
let Qty5 = 5;
let Qty6 = 6;

describe('Shopping_Bag.js - A product can be removed from the shopping bag', () => {
    it('Open the environment', () => {
        Environment.openBaseURL();
    });
    it('Go to a random section and return a product and add '+Qty3+' to the bag', () => {
        Navigation.randomSection();
        Search.PickRandomProduct();
        Product.SelectASizeAndAddTo('Bag',Qty3);
    });
    it('Item quantity can be reduced in the shopping bag', () => {
        ShoppingBag.removeShoppingBagItems(Qty1)
    });
});

describe('Shopping_Bag.js - A product can be added from the shopping bag', () => {
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

describe('Shopping_Bag.js - All products can be removed from the shopping bag', () => {
    it('Open the environment', () => {
        Environment.openBaseURL();
    });
    it('Go to a random section and return a product and add ('+Qty2+') product to the bag', () => {
        Navigation.randomSection();
        Search.PickRandomProduct();
        Product.SelectASizeAndAddTo('Bag', Qty2);
    });
    it('Go to another random section and return another product add ('+Qty3+') product to the bag', () => {
        Navigation.randomSection();
        Search.PickRandomProduct();
        Product.SelectASizeAndAddTo('Bag', Qty3);
    });
    it('Remove all items from the shopping bag', () => {
        ShoppingBag.removeAllShoppingBagItems()
    });
});

describe('Shopping_Bag.js - 20+ products can be added to the shopping bag', () => {
    it('Open the environment', () => {
        Environment.openBaseURL();
    });
    it('Go to a random section and return a product and add ('+Qty6+') product to the bag', () => {
        Navigation.randomSection();
        Search.PickRandomProduct();
        Product.SelectASizeAndAddTo('Bag',Qty6);
    });
    it('Go to a random section and return a product and add ('+Qty4+') product to the bag', () => {
        Navigation.randomSection();
        Search.PickRandomProduct();
        Product.SelectASizeAndAddTo('Bag',Qty4);
    });
    it('Go to a random section and return a product and add ('+Qty6+') product to the bag', () => {
        Navigation.randomSection();
        Search.PickRandomProduct();
        Product.SelectASizeAndAddTo('Bag',Qty6);
    });
    it('Go to a random section and return a product and add ('+Qty5+') product to the bag', () => {
        Navigation.randomSection();
        Search.PickRandomProduct();
        Product.SelectASizeAndAddTo('Bag',Qty5);
    });
    it('Expect number of items in bag to be correct ('+(Qty6+Qty4+Qty6+Qty5)+')', () => {
        ShoppingBag.expectShoppingBagItemNumberToBe(Qty6+Qty4+Qty6+Qty5);
    });
});
