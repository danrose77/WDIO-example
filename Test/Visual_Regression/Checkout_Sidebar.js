import VizCheck from "../../functions/VizCheck";
import Environment from "../../Pages/B2C/Environment";
import Search from "../../Pages/B2C/Search";
import Product from "../../Pages/B2C/Product";
import Navigation from "../../Pages/B2C/Navigation";

describe('Visual Regression test for ' + specname, () => {

    it('Open the ' + specname, () => {
        Environment.openBaseURL();
        Search.searchFor('Jean');
        let firstResult = $$('.photo')[0];
        firstResult.click();
        Product.SelectASizeAndAddTo('Bag');
        browser.pause(5000);
        let checkoutSidebarPopout = $('.account-actions .js-basket-item-count');
        checkoutSidebarPopout.click();
    });
    it('Visual Regression test - ' + specname, () => {
        VizCheck.element($('.basket-pop-in'),specname + '-basket-pop-in',10,Navigation.navWrapper);
    });
});
