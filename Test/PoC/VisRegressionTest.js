import Environment from '../../Pages/Environment.js';
import Navigation from "../../Pages/Navigation";
import VizCheck from "../../functions/VizCheck";

describe(specname+' - Debit card payment from a guest user', () => {

    it('Open the environment', () => {
        Environment.openBaseURL();
    });
    it('Visual Regression test - HomePage', () => {
        VizCheck.page('HomePageFull');
    });
});
