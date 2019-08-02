import Environment from '../../Pages/Environment.js';
import Navigation from "../../Pages/Navigation";
import Search from "../../Pages/Search";
import Product from "../../Pages/Product";

describe(specname + ' - Check all menu links', () => {
    it('Open the environment', () => {
        Environment.openBaseURL();
    });
    it('Go to the checkout as a guest', () => {
        Navigation.GoToCheckout();
    });
});
