import Environment from '../../../Pages/B2C/Environment.js';
import Navigation from "../../../Pages/B2C/Navigation";
import Search from "../../../Pages/B2C/Search";
import Product from "../../../Pages/B2C/Product";
import Wishlist from "../../../Pages/B2C/Wishlist";

describe('A product can be added to the wishlist', () => {
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
