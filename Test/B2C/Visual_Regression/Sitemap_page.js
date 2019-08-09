import Environment from '../../../Pages/Environment.js';
import Navigation from "../../../Pages/Navigation";
import VizCheck from "../../../functions/VizCheck";

describe('Visual Regression test for ' + specname, () => {
    it('Go to the storefinder', () => {
        Environment.goToBasePlus('component/sitemap/?view=sitemap');
        Navigation.acceptCookiesPrompt();
    });
    it('Visual Regression test - ' + specname, () => {
        VizCheck.page(specname, 5);
    });
});
