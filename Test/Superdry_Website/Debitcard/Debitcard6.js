import Environment from '../../../Pages/Environment.js';
import Product from '../../../Pages/Product.js';
import Search from '../../../Pages/Search.js';
import Navigation from '../../../Pages/Navigation.js';
import Checkout from "../../../Pages/Checkout";
import Customer from "../../../Pages/Customer";
import AdminPortal from "../../../Pages/AdminPortal";
import Givex from "../../../Pages/Givex";

let username = 'danrosetest+DC_user@gmail.com';

// If a mobile test giftcard needs to be set up with script "./test/setupGiftcard.js"

describe(specname+' - Debit card and Gift card payment from an existing user', () => {
    it('Set up a customer account', () => {
        Environment.openBaseURL();
        Customer.setUpNewAccount(username);
        Customer.addDeliveryAddress();
    });
    it('Set up in admin portal', () => {
        AdminPortal.login();
        AdminPortal.performSetup();
    });
    it('Set up giftcards', () => {
        Givex.login();
        Givex.setupGiftcards();
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
    it('Go to the checkout as a guest and pay by card and giftcard', () => {
        Navigation.GoToCheckout();
        Checkout.addGiftcards();
        Checkout.payByCard();
    });
});
