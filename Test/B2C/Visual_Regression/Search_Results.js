import Environment from '../../../Pages/B2C/Environment.js';
import Navigation from "../../../Pages/B2C/Navigation";
import VizCheck from "../../../functions/VizCheck";
import Search from "../../../Pages/B2C/Search";

let searchTerm = 'Shirt';

describe('Visual Regression test for ' + specname, () => {

    it('Open the ' + specname + ' for ' + searchTerm, () => {
        Environment.openBaseURL();
        Search.searchFor(searchTerm);
    });
    it('Visual Regression test - ' + specname, () => {
        VizCheck.screen(specname, 25);
    });
});
