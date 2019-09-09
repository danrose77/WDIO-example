import Environment from '../../../Pages/B2C/Environment.js';
import Product from '../../../Pages/B2C/Product.js';
import Search from '../../../Pages/B2C/Search.js';
import Navigation from '../../../Pages/B2C/Navigation.js';
import Checkout from "../../../Pages/B2C/Checkout";
import Customer from "../../../Pages/B2C/Customer";
import AdminPortal from "../../../Pages/AdminPortal";

let username = 'danrosetest+klarnaUS_user@gmail.com';
describe(specname + ' - setup test', () => {
    it('Set up in admin portal', () => {
        Environment.openBaseURL(); 
        AdminPortal.login();
        AdminPortal.disableCaptcha();
    });
});
describe(specname+' - Klarna US pay in 4 payment from an existing user', () => {
    it('Set up a customer account', () => {
        Environment.openCountrySiteForColour('US');
        Customer.setUpNewAccount(username);
        Customer.addDeliveryAddress();
    });
    it('Go to website and log in', () => {
        Environment.openCountrySiteForColour('US');
        Customer.signIn(username);
    });
    it('Go to a random section and add a product to the shopping bag', () => {
        Navigation.randomSection();
        Search.PickRandomProduct();
        Product.SelectASizeAndAddTo('Bag');
    }, 3);
    it('Go to the checkout as a guest and pay by Klarna in 4', () => {
        Navigation.GoToCheckout();
        Checkout.payByKlarna('in4');
    });
});
