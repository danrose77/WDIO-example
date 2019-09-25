import Environment from '../../../Pages/B2C/Environment.js';
import Navigation from "../../../Pages/B2C/Navigation";
import Search from "../../../Pages/B2C/Search";
import Product from "../../../Pages/B2C/Product";
import Wishlist from "../../../Pages/B2C/Wishlist";

describe('A product can be added to the wishlist and moved to the shopping bag', () => {
    it('Open the environment', () => {
        Environment.openBaseURL();
    });
    it('Go to a random section and return a product and add to wishlist', () => {
        Navigation.randomSection();
        Search.PickRandomProduct();
        Product.SelectASizeAndAddTo('Wishlist');
    });
    it('Go to wishlist and move an item to shopping bag', () => {
        Navigation.GoToWishlist();
        Wishlist.numberOfItemsInWishlist(1);
        Wishlist.moveItemToBag();
    });
});
