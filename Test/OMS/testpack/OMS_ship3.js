import Environment from '../../../Pages/Environment.js';
import Product from '../../../Pages/Product.js';
import Navigation from '../../../Pages/Navigation.js';
import Checkout from "../../../Pages/Checkout";
import Rundeck from "../../../Pages/Rundeck";
import OMS from "../../../Pages/OMS";
import Customer from "../../../Pages/Customer";

// US Run only to get Eagle DC
// Will pass on other locations but Eagle DC needs to be tested

let SKU1 = '1020200500313OI6003';
let Qty1 = 3;
let username = 'danrosetest+US_user@gmail.com';

describe(specname+' - Line: Single - Quantity: Multi - Payment: Card - Created -> Scheduled -> Released -> Shipped', () => {
    it('Set up a customer account for email '+username, () => {
        Environment.openUSsiteForColour();
        // Environment.openBaseURL(); --> If script is to be run on non us remove uncomment here and comment above
        Customer.setUpNewAccount(username);
        Customer.addDeliveryAddress();
    });
    it('Go to website and log in', () => {
        Environment.openUSsiteForColour();
        // Environment.openBaseURL(); --> If script is to be run on non us remove uncomment here and comment above
        Customer.signIn(username);
    });
    it('Go to SKU: '+SKU1+' and add ('+Qty1+') product to the shopping bag', () => {
        Environment.goToBasePlus('products/?sku='+SKU1);
        Product.SelectASizeAndAddTo('Bag', Qty1, true);
        Product.logUsedSKU(SKU1);
    });
    it('Go to the checkout as a guest and pay by card', () => {
        Navigation.GoToCheckout();
        Checkout.selectLocalDelivery();
        Checkout.fillTheDeliveryFields();
        Checkout.payByCard();
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
});