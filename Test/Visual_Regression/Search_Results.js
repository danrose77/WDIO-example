import Environment from '../../Pages/B2C/Environment.js';
import Navigation from "../../Pages/B2C/Navigation";
import VizCheck from "../../functions/VizCheck";
import Search from "../../Pages/B2C/Search";

describe('Visual Regression test for ' + specname, () => {

    it('Open the ' + specname + ' for shirts section', () => {
        Environment.openBaseURL();
        Navigation.specificSection(1, 8, 2);
    });
    it('Visual Regression test - elements on the category page', () => {
        VizCheck.element(Search.banner_container, specname + '- banner_container', 2);
    });
    it('Visual Regression test - elements on the category page', () => {
        VizCheck.element(Search.category_options_container, specname + '- category_options_container', 2);
    });
    it('Visual Regression test - elements on the category page', () => {
        Search.loadMore.scrollIntoView();
        VizCheck.element(Search.loadMore, specname + '- loadMore', 2);
    });
    it('Visual Regression test - elements on the category page', () => {
        Search.stay_connected.scrollIntoView();
        VizCheck.element(Search.stay_connected, specname + '- stay_connected', 2);
    });
});
