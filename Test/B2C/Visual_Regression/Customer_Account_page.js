import VizCheck from "../../../functions/VizCheck";
import Environment from "../../../Pages/Environment";
import Customer from "../../../Pages/Customer";
import Storefinder from "../../../Pages/Storefinder";
import Navigation from "../../../Pages/Navigation";

let username = 'danrosetest+DC_user@gmail.com';

describe('Visual Regression test for ' + specname, () => {
    it('Set up a customer account', () => {
        Environment.openBaseURL();
        Customer.setUpNewAccount(username);
        Customer.addDeliveryAddress();
    });
    it('Open the ' + specname, () => {
        Environment.goToBasePlus('my-account');
    });
    it('Visual Regression test - heading', () => {
        VizCheck.element($('.heading'),specname + '-heading',5);
    });
    it('Visual Regression test - account-options', () => {
        VizCheck.element($('.account-options'),specname + '-account-options',1);
    });
    it('Visual Regression test - Account_Information', () => {
        let Account_Information = $$('#menu-buttons .btn-secondary')[0];
        Account_Information.click();
        browser.pause(4000);
        VizCheck.element($('.account_billing'),specname + '-Account_Information',5);
        Environment.goToBasePlus('my-account');
    });
    it('Visual Regression test - Delivery_Information', () => {
        let Delivery_Information = $$('#menu-buttons .btn-secondary')[1];
        Delivery_Information.click();
        VizCheck.element($('.account_shipping'),specname + '-Delivery_Information',5);
        Environment.goToBasePlus('my-account');
    });
    it('Visual Regression test - Order_Information', () => {
        let Order_Information = $$('#menu-buttons .btn-secondary')[2];
        Order_Information.click();
        VizCheck.element($('.heading'),specname + '-Order_Information_Heading',5);
        VizCheck.element($('.action-buttons'),specname + '-Order_Information_action_buttons',5);
        Environment.goToBasePlus('my-account');
    });
    it('Visual Regression test - Wish_List', () => {
        let Wish_List = $$('#menu-buttons .btn-secondary')[3];
        Wish_List.click();
        VizCheck.element($('#main-body'),specname + '-Wish_List',5);
        Environment.goToBasePlus('my-account');
    });
    it('Visual Regression test - Gift_Card', () => {
        let Gift_Card = $$('#menu-buttons .btn-secondary')[4];
        Gift_Card.click();
        VizCheck.element($('#main-body'),specname + '-Gift_Card',5);
    });
});
