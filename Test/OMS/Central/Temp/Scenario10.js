import Environment from '../../../../Pages/B2C/Environment.js';
import Product from '../../../../Pages/B2C/Product.js';
import Navigation from '../../../../Pages/B2C/Navigation.js';
import Checkout from "../../../../Pages/B2C/Checkout";
import Rundeck from "../../../../Pages/Rundeck";
import OMS from "../../../../Pages/OMS";
import Customer from "../../../../Pages/B2C/Customer";
import AdminPortal from "../../../../Pages/AdminPortal";
import write from "../../../../functions/write";

const SKU1 = '210302600006302A006';
const SKU2 = '2103026000114HQO001';

const Qty1 = 1;
const username = 'danrosetest+german@gmail.com';
const countryVal = 'DE';
let Testname3 = '- Multi Line Single Quantity - SKU:' + SKU1 + ' * ' + Qty1 + ' & SKU:' + SKU2 + ' * ' + Qty1 + ' logged in as user ' + username + ' on site ' + countryVal;

describe(specname+' - setup for user ' + username + ' on site ' + countryVal, () => {
    it('Set up a customer account for email '+username, () => {
        Environment.openCountrySiteForColour(countryVal);
        AdminPortal.login();
        //AdminPortal.disableCaptcha();
        AdminPortal.ensureStockInFrontEnd(SKU1);
        AdminPortal.ensureStockInFrontEnd(SKU2);
        //AdminPortal.colOrderPrefix(true);
        //Environment.openCountrySiteForColour(countryVal);
        //Customer.setUpNewAccount(username);
        //Customer.addDeliveryAddress();
    });
});

describe(specname+Testname3, () => {
    it('Go to website and log in', () => {
        Environment.openCountrySiteForColour(countryVal);
        Customer.signIn(username);
    });
    it('Go to SKU: '+SKU1+' and add ('+Qty1+') product to the shopping bag', () => {
        Environment.openURL(site + 'products/?sku='+SKU1);
        Product.SelectASizeAndAddTo('Bag', Qty1, true);
        Product.logUsedSKU(SKU1);
    });
    it('Go to SKU: '+SKU2+' and add ('+Qty1+') product to the shopping bag', () => {
        Environment.openURL(site + 'products/?sku='+SKU2);
        Product.SelectASizeAndAddTo('Bag', Qty1, true);
        Product.logUsedSKU(SKU2);
    });
    it('Go to the checkout and pay by card', () => {
        Navigation.GoToCheckout();
        Checkout.payByCard();
    });
    it('Export order in Rundeck', () => {
        Rundeck.orderExport();
        Rundeck.logout();
    });
    it('Go to OMS and retrieve order', () => {
        OMS.logIn();
        OMS.retrieveOrder();
        OMS.logOut();
        write.toTextFile('Order number: ' + referenceNumber + ' ' + Testname3, "Central_Orders_Creation");
    },);
});
/*
describe(specname+' - post run for environment', () => {
    it('Change colour prefix back', () => {
        Environment.openCountrySiteForColour(countryVal);
        AdminPortal.login();
        AdminPortal.colOrderPrefix(false);
    });
});

 */
