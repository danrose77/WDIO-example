import VizCheck from "../../../functions/VizCheck";
import Navigation from "../../../Pages/Navigation";
import Environment from "../../../Pages/Environment";
import Search from "../../../Pages/Search";
import Product from "../../../Pages/Product";

describe('Visual Regression test for ' + specname, () => {

    it('Open the ' + specname, () => {
        Environment.openBaseURL();
        Navigation.randomSection();
        Search.PickRandomProduct();
        Product.SelectASizeAndAddTo('Bag');
        browser.url(site + 'checkout');
        browser.pause(1500);
    });
    it('Visual Regression test - ' + specname, () => {
        VizCheck.fullPage(specname, 15);
    });
});
