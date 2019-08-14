import Environment from '../../Pages/B2C/Environment.js';
import Product from '../../Pages/B2C/Product.js';
import Search from '../../Pages/B2C/Search.js';
import Navigation from '../../Pages/B2C/Navigation.js';
import Checkout from "../../Pages/B2C/Checkout";
import Customer from "../../Pages/B2C/Customer";

let username = 'danrosetest+sofort@gmail.com';

describe(specname+' - Sofort payment from an existing user', () => {
    it('Set up a customer account for email '+username, () => {
        Environment.openBaseURL();
        Customer.setUpNewAccount(username);
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
    it('Go to the checkout and pay by sofort', () => {
        Navigation.GoToCheckout();
        Checkout.payBySofort();
    });
});
