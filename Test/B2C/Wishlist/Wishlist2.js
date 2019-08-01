import Environment from '../../../Pages/Environment.js';
import Navigation from "../../../Pages/Navigation";
import Search from "../../../Pages/Search";
import Product from "../../../Pages/Product";
import Wishlist from "../../../Pages/Wishlist";

describe(specname+' - A product can be added to the wishlist', () => {
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
