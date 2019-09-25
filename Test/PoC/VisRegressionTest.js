import Environment from '../../Pages/B2C/Environment.js';
import Navigation from "../../Pages/B2C/Navigation";
import VizCheck from "../../functions/VizCheck";

describe('Debit card payment from a guest user', () => {

    it('Open the environment', () => {
        Environment.openBaseURL();
    });
    it('Visual Regression test - HomePage', () => {
        VizCheck.page('HomePageFull');
    });
});
