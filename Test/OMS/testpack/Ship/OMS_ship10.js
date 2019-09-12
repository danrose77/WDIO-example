import Environment from '../../../../Pages/B2C/Environment.js';
import Product from '../../../../Pages/B2C/Product.js';
import Navigation from '../../../../Pages/B2C/Navigation.js';
import Checkout from "../../../../Pages/B2C/Checkout";
import Rundeck from "../../../../Pages/Rundeck";
import OMS from "../../../../Pages/OMS";
import Customer from "../../../../Pages/B2C/Customer";
import AdminPortal from "../../../../Pages/AdminPortal";

let SKU1 = '1020200500313OI6003';
let Qty1 = 1;
let username = 'danrosetest+ideal@gmail.com';

describe(specname+' - setup test', () => {
    it('Set up in admin portal', () => {
        Environment.openCountrySiteForColour('NL');
        AdminPortal.login();
        AdminPortal.disableCaptcha();
        AdminPortal.ensureStockInFrontEnd(SKU1);
        AdminPortal.colOrderPrefix(true);
        Environment.openURL("https://sup-oms.qa.coc.ibmcloud.com/smcfs/yfshttpapi/yantrahttpapitester.jsp");
        OMS.inventoryAdjuster(SKU1, 1000, '080');
        OMS.inventoryAdjuster(SKU1, 1000, '090');
        OMS.inventoryAdjuster(SKU1, 1000, '110');
    });
});

describe(specname+' - Line: Single - Quantity: Single - Payment: Ideal - Created -> Scheduled -> Released -> Shipped', () => {
    it('Set up a customer account for email '+username, () => {
        Environment.openCountrySiteForColour('NL');
        Customer.setUpNewAccount(username);
    });
    it('Go to website and log in', () => {
        Environment.openCountrySiteForColour('NL');
        Product.closeGoToCountry();
        Customer.signIn(username);
    });
    it('Go to SKU: '+SKU1+' and add ('+Qty1+') product to the shopping bag', () => {
        Environment.goToBasePlus('products/?sku='+SKU1);
        Product.closeGoToCountry();
        Product.SelectASizeAndAddTo('Bag', Qty1, true);
        Product.logUsedSKU(SKU1);
    });
    it('Go to the checkout as a guest and pay by Ideal', () => {
        Navigation.GoToCheckout();
        Checkout.fillTheDeliveryFields();
        Checkout.payByIdeal();
    });
    it('Export order in Rundeck', () => {
        Rundeck.orderExport();
    });
    it('Go to OMS and retrieve order', () => {
        OMS.logIn();
        OMS.retrieveOrder();
    },);
    it('Then schedule order', () => {
        OMS.scheduleOrder();
    }, 9);
    it('Then release order', () => {
        OMS.releaseOrder();
    }, 9);
    it('Then logout of OMS', () => {
        OMS.logOut();
    });
    it('Then ship the order', () => {
        OMS.sterlingQueryForShipDetails();
        OMS.APITesterShipOrder();
    });
    it('Confirm shipped status', () => {
        OMS.logIn();
        OMS.retrieveOrder();
        OMS.checkForStatus('Shipped')
    },);
    it('OMS logout', () => {
        OMS.logOut();
    },);
});

describe(specname+' - post run for environment', () => {
    it('Change colour prefix back', () => {
        Environment.openCountrySiteForColour('NL');
        AdminPortal.login();
        AdminPortal.colOrderPrefix(false);
    });
});
