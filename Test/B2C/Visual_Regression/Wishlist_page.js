import Environment from '../../../Pages/Environment.js';
import Navigation from "../../../Pages/Navigation";
import VizCheck from "../../../functions/VizCheck";
import Search from "../../../Pages/Search";
import Product from "../../../Pages/Product";

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
