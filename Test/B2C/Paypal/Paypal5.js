import Environment from '../../../Pages/B2C/Environment.js';
import Product from '../../../Pages/B2C/Product.js';
import Search from '../../../Pages/B2C/Search.js';
import Navigation from '../../../Pages/B2C/Navigation.js';
import Checkout from "../../../Pages/B2C/Checkout";
import Customer from "../../../Pages/B2C/Customer";
import Givex from "../../../Pages/Givex";
import AdminPortal from "../../../Pages/AdminPortal";

let giftcard = '6338901547310003689';
describe('setup test', () => {
    it('Set up in admin portal', () => {
        Environment.openBaseURL(); 
        AdminPortal.login();
        AdminPortal.disableCaptcha();
    });
});
describe('Paypal and giftcard payment from a new user', () => {
    it('Set up a gift card', () => {
        Givex.login();
        Givex.setupGiftcards(giftcard);
    });
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
    it('Go to the checkout as a guest and pay by paypal and giftcard', () => {
        Navigation.GoToCheckout();
        Checkout.addGiftcards(giftcard, "0692");
        Checkout.payByPaypal();
    });
});
