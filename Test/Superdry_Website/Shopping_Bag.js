import Environment from '../../Pages/Environment.js';
import Product from '../../Pages/Product.js';
import Search from '../../Pages/Search.js';
import Navigation from '../../Pages/Navigation.js';
import ShoppingBag from "../../Pages/ShoppingBag";

describe('Shopping_Bag.js - A product can be removed from the shopping bag', () => {
    it('Open the environment', () => {
        Environment.openBaseURL();
    });
    it('Go to a random section and return a product and add three to the bag', () => {
        Navigation.randomSection();
        Search.PickRandomProduct();
        Product.SelectASizeAndAddToBag(3);
    });
    it('Item quantity can be reduced in the shopping bag', () => {
        ShoppingBag.removeShoppingBagItems(2)
    });
});

describe('Shopping_Bag.js - A product can be added from the shopping bag', () => {
    it('Open the environment', () => {
        Environment.openBaseURL();
    });
    it('Go to a random section and return a product and add it to the bag', () => {
        Navigation.randomSection();
        Search.PickRandomProduct();
        Product.SelectASizeAndAddToBag();
    });
    it('Item quantity can be increased in the shopping bag', () => {
        ShoppingBag.increaseShoppingBagItems(2)
    });
});

describe('Shopping_Bag.js - All products can be removed from the shopping bag', () => {
    it('Open the environment', () => {
        Environment.openBaseURL();
    });
    it('Go to a random section and return a product and add it to the bag', () => {
        Navigation.randomSection();
        Search.PickRandomProduct();
        Product.SelectASizeAndAddToBag(2);
    });
    it('Go to another random section and return another product and add it to the bag', () => {
        Navigation.randomSection();
        Search.PickRandomProduct();
        Product.SelectASizeAndAddToBag(3);
    });
    it('Remove all items from the shopping bag', () => {
        ShoppingBag.removeAllShoppingBagItems()
    });
});

describe('Shopping_Bag.js - 20+ products can be added to the shopping bag', () => {
    it('Open the environment', () => {
        Environment.openBaseURL();
    });
    it('Go to a random section and return a product and add six to the bag', () => {
        Navigation.randomSection();
        Search.PickRandomProduct();
        Product.SelectASizeAndAddTo('Bag',6);
    });
    it('Go to a random section and return a product and add four to the bag', () => {
        Navigation.randomSection();
        Search.PickRandomProduct();
        Product.SelectASizeAndAddTo('Bag',4);
    });
    it('Go to a random section and return a product and add six to the bag', () => {
        Navigation.randomSection();
        Search.PickRandomProduct();
        Product.SelectASizeAndAddTo('Bag',6);
    });
    it('Go to a random section and return a product and add five to the bag', () => {
        Navigation.randomSection();
        Search.PickRandomProduct();
        Product.SelectASizeAndAddTo('Bag',5);
    });
    it('Expect number of items in bag to be correct', () => {
        ShoppingBag.expectShoppingBagItemNumberToBe(21)
    });
});
