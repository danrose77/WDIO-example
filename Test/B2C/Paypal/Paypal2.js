import Environment from '../../../Pages/B2C/Environment.js';
import Product from '../../../Pages/B2C/Product.js';
import Search from '../../../Pages/B2C/Search.js';
import Navigation from '../../../Pages/B2C/Navigation.js';
import Checkout from "../../../Pages/B2C/Checkout";
import Customer from "../../../Pages/B2C/Customer";
import AdminPortal from "../../../Pages/AdminPortal";

describe(specname + ' - setup test', () => {
    it('Set up in admin portal', () => {
        Environment.openBaseURL(); 
        AdminPortal.login();
        AdminPortal.disableCaptcha();
    });
});
describe(specname+' - Paypal payment from a new user', () => {
    it('Open the environment', () => {
        Environment.openBaseURL();
    });
    it('Set up a customer account', () => {
        Customer.setUpNewAccount();
    });
    it('Go to a random section and add a product to the shopping bag', () => {
        Navigation.randomSection();
        Search.PickRandomProduct();
        Product.SelectASizeAndAddTo('Bag');
    });
    it('Go to the checkout as a guest and pay by paypal', () => {
        Navigation.GoToCheckout();
        Checkout.payByPaypal();
    });
});
