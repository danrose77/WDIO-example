import Environment from '../../../Pages/Environment.js';
import Navigation from "../../../Pages/Navigation";
import VizCheck from "../../../functions/VizCheck";
import Storefinder from "../../../Pages/Storefinder";

describe('Visual Regression test for ' + specname, () => {
    it('Go to the storefinder', () => {
        Environment.goToBasePlus('/stores');
    });
    it('I search for store nearest to Cheltenham', () => {
        Storefinder.findTheNearestStoreTo('Cheltenham');
        browser.pause(5000);
        Storefinder.StoreHeader[0].click();
        browser.pause(2000);
        Navigation.acceptCookiesPrompt();
    });
    /*
    // Full page check more likely to generate false positive diffs so commented out
    it('Visual Regression test - ' + specname, () => {
        VizCheck.fullPage(specname, 5);
    });
    */

    it('Visual Regression test - store_locator__input', () => {
        VizCheck.element(Storefinder.store_locator__input,specname + '-store_locator__input',5,Navigation.navWrapper);
    });
    it('Visual Regression test - nearest_stores', () => {
        VizCheck.element(Storefinder.nearest_stores,specname + '-nearest_stores',1, Navigation.navWrapper);
    });
    it('Visual Regression test - store_info', () => {
        VizCheck.element(Storefinder.store_info,specname + '-store_info',1,Navigation.navWrapper);
    });
});






