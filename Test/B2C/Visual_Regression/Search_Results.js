import Environment from '../../../Pages/Environment.js';
import Navigation from "../../../Pages/Navigation";
import VizCheck from "../../../functions/VizCheck";
import Search from "../../../Pages/Search";

let searchTerm = 'Shirt';

describe('Visual Regression test for ' + specname, () => {

    it('Open the ' + specname + ' for ' + searchTerm, () => {
        Environment.openBaseURL();
        Search.searchFor(searchTerm);
    });
    it('Visual Regression test - ' + specname, () => {
        VizCheck.page(specname, 25);
    });
});
