import Environment from '../../Pages/Environment.js';
import Navigation from "../../Pages/Navigation";
import Search from "../../Pages/Search";
import Product from "../../Pages/Product";

describe(specname + ' - testbed JS file', () => {
    it('Open the environment', () => {
        Environment.openBaseURL();
    });
    it('Test JS', () => {
        Navigation.randomSection();
        Search.PickRandomProduct();
        Product.SelectASizeAndAddTo('Bag');
    });
});
