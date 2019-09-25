import Environment from '../../Pages/B2C/Environment.js';
import Product from '../../Pages/B2C/Product.js';
import Search from '../../Pages/B2C/Search.js';
import Navigation from '../../Pages/B2C/Navigation.js';
import Checkout from "../../Pages/B2C/Checkout";
import Customer from "../../Pages/B2C/Customer";
import AdminPortal from "../../Pages/AdminPortal";

/*
DOTPAY available on PL site only.
*/

let username = 'danrosetest+dotpay@gmail.com';
describe('setup test', () => {
    it('Set up in admin portal', () => {
        Environment.openBaseURL(); 
        AdminPortal.login();
        AdminPortal.disableCaptcha();
    });
});
describe('Dotpay payment from an existing user', () => {
    it('Set up a customer account for email '+username, () => {
        Environment.openCountrySiteForColour('PL');
        Customer.setUpNewAccount(username);
    });

    it('Go to website and log in', () => {
        Environment.openCountrySiteForColour('PL');
        Customer.signIn(username);
    });
    it('Go to a random section and add a product to the shopping bag', () => {
        Navigation.randomSection();
        Search.PickRandomProduct();
        Product.SelectASizeAndAddTo('Bag');
    }, 3);

    it('Go to the checkout as a guest', () => {
        Navigation.GoToCheckout();
    });
    it('Pay by Dotpay', () => {
        Checkout.payByDotpay();
    });
});
