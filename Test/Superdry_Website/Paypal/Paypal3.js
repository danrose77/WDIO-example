import Environment from '../../../Pages/Environment.js';
import Product from '../../../Pages/Product.js';
import Search from '../../../Pages/Search.js';
import Navigation from '../../../Pages/Navigation.js';
import Checkout from "../../../Pages/Checkout";
import Customer from "../../../Pages/Customer";
import AdminPortal from "../../../Pages/AdminPortal";

let username = 'danrosetest+DC_user@gmail.com';

describe(specname+' - Paypal payment from an existing user', () => {
    it('Set up a customer account', () => {
        Environment.openBaseURL();
        Customer.setUpNewAccount(username);
        Customer.addDeliveryAddress();
        AdminPortal.login();
        AdminPortal.performSetup();
    });
    it('Go to website and log in', () => {
        Environment.openBaseURL();
        Customer.signIn(username);
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
