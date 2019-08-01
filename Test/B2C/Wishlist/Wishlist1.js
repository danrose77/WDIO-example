import Environment from '../../../Pages/Environment.js';
import Navigation from "../../../Pages/Navigation";
import Search from "../../../Pages/Search";
import Product from "../../../Pages/Product";
import Wishlist from "../../../Pages/Wishlist";

describe(specname+' - A product can be added to the wishlist and moved to the shopping bag', () => {
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
