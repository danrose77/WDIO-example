import Environment from '../../Pages/Environment.js';
import Navigation from "../../Pages/Navigation";
import Search from "../../Pages/Search";
import Product from "../../Pages/Product";
import Wishlist from "../../Pages/Wishlist";

describe('Wishlist.js - A product can be added to the wishlist', () => {
    it('Open the environment', () => {
        Environment.openBaseURL();
    });
    it('Go to a random section and return a product', () => {
        Navigation.randomSection();
        Search.PickRandomProduct();
    });
    it('Add to wishlist', () => {
        Product.SelectASizeAndAddTo('Wishlist');
        Navigation.GoToWishlist();
        Wishlist.numberOfItemsInWishlist(1);
    });
});

describe('Wishlist.js - A product can be added to the wishlist and moved to the shopping bag', () => {
    it('Open the environment', () => {
        Environment.openBaseURL();
    });
    it('Go to a random section and return a product and add to wishlist', () => {
        Navigation.randomSection();
        Search.PickRandomProduct();
        Product.SelectASizeAndAddTo('Wishlist');
    });
    it('Go to a random section and return a product and add to wishlist', () => {
        Navigation.randomSection();
        Search.PickRandomProduct();
        Product.SelectASizeAndAddTo('Wishlist');
    });
    it('Go to wishlist and move an item to shopping bag', () => {
        Navigation.GoToWishlist();
        Wishlist.moveItemToBag();
        Wishlist.numberOfItemsInWishlist(1);
    });
});

/*
describe('Wishlist.js - A product can be added to the wishlist and the wishlist can be shared', () => {
    it('Open the environment', () => {
        Environment.openBaseURL();
    });
    it('Go to a random section and return a product', () => {
        Navigation.randomSection();
        Search.PickRandomProduct();
    });
});

describe('Wishlist.js - A product can be added to the wishlist as a logged in customer and the account wishlist contains the item', () => {
    it('Open the environment', () => {
        Environment.openBaseURL();
    });
    it('Go to a random section and return a product', () => {
        Navigation.randomSection();
        Search.PickRandomProduct();
    });
});
*/
