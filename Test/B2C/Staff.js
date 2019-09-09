import Environment from '../../Pages/B2C/Environment.js';
import Product from '../../Pages/B2C/Product.js';
import Search from '../../Pages/B2C/Search.js';
import Navigation from '../../Pages/B2C/Navigation.js';
import Checkout from "../../Pages/B2C/Checkout";
import Customer from "../../Pages/B2C/Customer";
import AdminPortal from "../../Pages/AdminPortal";

let username = 'danrosetest+staff_user@gmail.com';
describe(specname + ' - setup test', () => {
    it('Set up in admin portal', () => {
        Environment.openBaseURL(); 
        AdminPortal.login();
        AdminPortal.disableCaptcha();
    });
});
describe(specname+' - Staff user checking that relevant discount is applied', () => {
    it('Set up a customer account', () => {
        Environment.openCountrySiteForColour('UK');
        AdminPortal.login();
        AdminPortal.disableCaptcha();
        AdminPortal.logout.click();
        Environment.openCountrySiteForColour('UK');
        Customer.setUpNewAccount(username);
        Customer.addDeliveryAddress();
    });
    it('Set up in admin portal', () => {
        AdminPortal.login();
        AdminPortal.performSetup();
    });
    it('Go to website and log in', () => {
        Environment.openCountrySiteForColour('UK');
        Customer.signIn(username);
    });
    it('Go to a random section and add a product to the shopping bag', () => {
        Navigation.randomSection();
        Search.ensureStaffDiscountOnPrices();
        Search.PickRandomProduct();
        Product.ensureStaffDiscountOnPrice();
        Product.SelectASizeAndAddTo('Bag');
    }, 3);
    it('Go to the checkout and ensure discount applied', () => {
        Navigation.GoToCheckout();
        Checkout.ensureStaffDiscountApplied();
        Checkout.emptyBag();
    });
});
