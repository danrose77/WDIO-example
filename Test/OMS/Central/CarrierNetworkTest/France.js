import Environment from '../../../../Pages/B2C/Environment.js';
import Product from '../../../../Pages/B2C/Product.js';
import Navigation from '../../../../Pages/B2C/Navigation.js';
import Checkout from "../../../../Pages/B2C/Checkout";
import Rundeck from "../../../../Pages/Rundeck";
import OMS from "../../../../Pages/OMS";
import Customer from "../../../../Pages/B2C/Customer";
import AdminPortal from "../../../../Pages/AdminPortal";
import write from "../../../../functions/write";
// Duke
//const SKU1 = "210302600010724Y001";
//const SKU2 = "2123833500024WSS006";
// Baron
const SKU1 = "210302600006302A006";
const SKU2 = "2103026000114HQO001";

const Qty1 = 1;
const Qty2 = 2;
const username = 'danrosetest+french@gmail.com';
// Available users in data/customers.yml - danrosetest+austrian@gmail.com, danrosetest+austrian@gmail.com, danrosetest+belgian@gmail.com
// danrosetest+french@gmail.com, danrosetest+german@gmail.com, danrosetest+greek@gmail.com, danrosetest+irish@gmail.com, danrosetest+italian@gmail.com,
// danrosetest+netherlands@gmail.com, danrosetest+poland@gmail.com, danrosetest+UK@gmail.com, danrosetest+switzerland@gmail.com, danrosetest+hongkong@gmail.com,
// danrosetest+norway@gmail.com, danrosetest+US@gmail.com, danrosetest+canada@gmail.com
const countryVal = 'FR';
// Leave blank for UK
// supported country vals at present: 'US' (USA), 'NL' (Netherlands), 'PL' (Poland), 'DE' (Germany), 'BE' (Belgium),
// 'FR' (France), 'IE' (Ireland), 'IT' (Italy), 'CH' (Switzerland), 'HK' (HongKong EN), 'NO' (Norway), 'CAEN' (Canada EN), 'CAFR' (Canada FR)

let Testname1 = '- Single Line Single Quantity - SKU:' + SKU1 + ' * ' + Qty1 + ' logged in as user ' + username + ' on site ' + countryVal;
let Testname2 = '- Single Line Multi Quantity - SKU:' + SKU1 + ' * ' + Qty2 + ' logged in as user ' + username + ' on site ' + countryVal;
let Testname3 = '- Multi Line Single Quantity - SKU:' + SKU1 + ' * ' + Qty1 + ' & SKU:' + SKU2 + ' * ' + Qty1 + ' logged in as user ' + username + ' on site ' + countryVal;
let Testname4 = '- Multi Line Multi Quantity - SKU:' + SKU1 + ' * ' + Qty2 + ' & SKU:' + SKU2 + ' * ' + Qty2 + ' logged in as user ' + username + ' on site ' + countryVal;

describe(specname+' - setup for user ' + username + ' on site ' + countryVal, () => {
    it('Set up a customer account for email '+username, () => {
        Environment.openCountrySiteForColour(countryVal);
        AdminPortal.login();
        AdminPortal.disableCaptcha();
        AdminPortal.ensureStockInFrontEnd(SKU1);
        AdminPortal.ensureStockInFrontEnd(SKU2);
        AdminPortal.colOrderPrefix(true);
        Environment.openCountrySiteForColour(countryVal);
        Customer.setUpNewAccount(username);
        Customer.addDeliveryAddress();
    });
});

describe(specname+Testname1, () => {
    it('Go to website and log in', () => {
        Environment.openCountrySiteForColour(countryVal);
        Customer.signIn(username);
    });
    it('Go to SKU: '+SKU1+' and add ('+Qty1+') product to the shopping bag', () => {
        Environment.openURL(site + 'products/?sku='+SKU1);
        Product.SelectASizeAndAddTo('Bag', Qty1, true);
        Product.logUsedSKU(SKU1);
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
        write.toTextFile('Order number: ' + referenceNumber + ' ' + Testname1, "Central_Orders_Creation");
    },);
});
/*
describe(specname+Testname2, () => {
    it('Go to website and log in', () => {
        Environment.openCountrySiteForColour(countryVal);
        Customer.signIn(username);
    });
    it('Go to SKU: '+SKU1+' and add ('+Qty2+') product to the shopping bag', () => {
        Environment.openURL(site + 'products/?sku='+SKU1);
        Product.SelectASizeAndAddTo('Bag', Qty2, true);
        Product.logUsedSKU(SKU1);
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
        write.toTextFile('Order number: ' + referenceNumber + ' ' + Testname2, "Central_Orders_Creation");
    },);
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
        write.xmlOrderFiles('LAREDOUTElrfr_');
    },);
});
/*

describe(specname+Testname4, () => {
    it('Go to website and log in', () => {
        Environment.openCountrySiteForColour(countryVal);
        Customer.signIn(username);
    });
    it('Go to SKU: '+SKU1+' and add ('+Qty2+') product to the shopping bag', () => {
        Environment.openURL(site + 'products/?sku='+SKU1);
        Product.SelectASizeAndAddTo('Bag', Qty2, true);
        Product.logUsedSKU(SKU1);
    });
    it('Go to SKU: '+SKU2+' and add ('+Qty2+') product to the shopping bag', () => {
        Environment.openURL(site + 'products/?sku='+SKU2);
        Product.SelectASizeAndAddTo('Bag', Qty2, true);
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
        write.toTextFile('Order number: ' + referenceNumber + ' ' + Testname4, "Central_Orders_Creation");
    },);
});


 */
describe(specname+' - post run for environment', () => {
    it('Change colour prefix back', () => {
        Environment.openCountrySiteForColour(countryVal);
        AdminPortal.login();
        AdminPortal.colOrderPrefix(false);
    });
});
