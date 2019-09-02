import Environment from '../../Pages/B2C/Environment.js';
import Navigation from "../../Pages/B2C/Navigation";
import VizCheck from "../../functions/VizCheck";
import Search from "../../Pages/B2C/Search";
import Product from "../../Pages/B2C/Product";

describe('Visual Regression test for ' + specname, () => {

    it('Open the ' + specname, () => {
        Environment.openBaseURL();
        Navigation.randomSection();
        Search.PickRandomProduct();
        Product.SelectASizeAndAddTo('Wishlist');
        Navigation.GoToWishlist();
    });
    it('Visual Regression test - ' + specname, () => {
        VizCheck.page(specname, 1);
    });
});
