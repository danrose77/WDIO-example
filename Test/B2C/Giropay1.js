import Environment from '../../Pages/Environment.js';
import Product from '../../Pages/Product.js';
import Search from '../../Pages/Search.js';
import Navigation from '../../Pages/Navigation.js';
import Checkout from "../../Pages/Checkout";
import Customer from "../../Pages/Customer";

let username = 'danrosetest+giropay@gmail.com';

describe(specname+' - Giropay payment from an existing user', () => {
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
    it('Go to the checkout and pay by giropay', () => {
        Navigation.GoToCheckout();
        Checkout.payByGiropay();
    });
});
