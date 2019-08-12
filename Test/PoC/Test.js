import Environment from '../../Pages/Environment.js';
import Navigation from "../../Pages/Navigation";
import Search from "../../Pages/Search";
import Product from "../../Pages/Product";
import AdminPortal from "../../Pages/AdminPortal";

describe(specname + ' - testbed JS file', () => {
    it('Open the environment', () => {
        AdminPortal.login();
    });
    /*
    it('Test JS', () => {
        Navigation.randomSection();
        Search.PickRandomProduct();
        Product.SelectASizeAndAddTo('Bag');
    });
     */
});
