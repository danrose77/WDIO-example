import Environment from '../../Pages/Environment.js';
import Product from '../../Pages/Product.js';
import Search from '../../Pages/Search.js';
import Navigation from '../../Pages/Navigation.js';
import Checkout from "../../Pages/Checkout";
import Customer from "../../Pages/Customer";
import AdminPortal from "../../Pages/AdminPortal";
import Givex from "../../Pages/Givex";
/*
describe('Debit card payment from a guest user', () => {
    it('Open the environment', () => {
        Environment.openBaseURL();
    });
    it('Go to a random section and add a product to the shopping bag', () => {
        Navigation.randomSection();
        Search.PickRandomProduct();
        Product.SelectASizeAndAddTo('Bag');
    });
    it('Go to the checkout as a guest and pay by card', () => {
        Navigation.GoToCheckout();
        Checkout.fillTheDeliveryFields();
        Checkout.payByCard();
    });
});

describe('Debit card payment from a new user', () => {
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
    it('Go to the checkout as a guest and pay by card', () => {
        Navigation.GoToCheckout();
        Checkout.payByCard();
    });
});

describe('Debit card payment from an existing user', () => {
    it('Set up a customer account', () => {
        Environment.openBaseURL();
        Customer.setUpNewAccount('danrosetest+DC_user@gmail.com');
        Customer.addDeliveryAddress();
        AdminPortal.login();
        AdminPortal.performSetup();
    });
    it('Go to website and log in', () => {
        Environment.openBaseURL();
        Customer.signIn('danrosetest+DC_user@gmail.com');
    });
    it('Go to a random section and add a product to the shopping bag', () => {
        Navigation.randomSection();
        Search.PickRandomProduct();
        Product.SelectASizeAndAddTo('Bag');
    });
    it('Go to the checkout as a guest and pay by card', () => {
        Navigation.GoToCheckout();
        Checkout.payByCard();
    });
});

describe('Debit card and Gift card payment from a guest user', () => {
    it('Set up a gift card', () => {
        Givex.login();
        Givex.setupGiftcards('6338901547310003689');
    });
    it('Open the environment', () => {
        Environment.openBaseURL();
    });
    it('Go to a random section and add a product to the shopping bag', () => {
        Navigation.randomSection();
        Search.PickRandomProduct();
        Product.SelectASizeAndAddTo('Bag');
    });
    it('Go to the checkout as a guest and pay by card and giftcard', () => {
        Navigation.GoToCheckout();
        Checkout.addGiftcards("6338901547310003689", "0692");
        Checkout.fillTheDeliveryFields();
        Checkout.payByCard();
    });
});

describe('Debit card and Gift card payment from a new user', () => {
    it('Set up a gift card', () => {
        Givex.login();
        Givex.setupGiftcards('6338901547310003689');
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
    it('Go to the checkout as a guest and pay by card', () => {
        Navigation.GoToCheckout();
        Checkout.addGiftcards("6338901547310003689", "0692");
        Checkout.payByCard();
    });
});

describe('Debit card and Gift card payment from an existing user', () => {
    it('Set up a customer account', () => {
        Environment.openBaseURL();
        Customer.setUpNewAccount('danrosetest+DC_user@gmail.com');
        Customer.addDeliveryAddress();
        AdminPortal.login();
        AdminPortal.performSetup();
        Givex.login();
        Givex.setupGiftcards();
    });
    it('Go to website and log in', () => {
        Environment.openBaseURL();
        Customer.signIn('danrosetest+DC_user@gmail.com');
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
*/

describe('Debit card and Customer credit payment from an existing user', () => {
    it('Set up a customer account', () => {
        Environment.openBaseURL();
        Customer.setUpNewAccount('danrosetest+DCandCC_user@gmail.com');
        Customer.addDeliveryAddress();
        AdminPortal.login();
        AdminPortal.performSetup();
    });
    it('Go to website and log in', () => {
        Environment.openBaseURL();
        Customer.signIn('danrosetest+DC_user@gmail.com');
    });
    it('Go to a random section and add a product to the shopping bag', () => {
        Navigation.randomSection();
        Search.PickRandomProduct();
        Product.SelectASizeAndAddTo('Bag');
    });
    it('Go to the checkout as a guest and pay by card', () => {
        Navigation.GoToCheckout();
        Checkout.payByCard();
    });
});
