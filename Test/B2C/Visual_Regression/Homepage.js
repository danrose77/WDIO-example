import Environment from '../../../Pages/B2C/Environment.js';
import Navigation from "../../../Pages/B2C/Navigation";
import VizCheck from "../../../functions/VizCheck";

describe('Visual Regression test for ' + specname, () => {

    it('Open the ' + specname, () => {
        Environment.openBaseURL();
    });
    it('Visual Regression test - ' + specname, () => {
        VizCheck.page(specname, 10);
    });
});
