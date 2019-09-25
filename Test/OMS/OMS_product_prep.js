import Environment from '../../Pages/B2C/Environment.js';
import Product from '../../Pages/B2C/Product.js';
import Navigation from '../../Pages/B2C/Navigation.js';
import Checkout from "../../Pages/B2C/Checkout";
import Rundeck from "../../Pages/Rundeck";
import OMS from "../../Pages/OMS";
import AdminPortal from "../../Pages/AdminPortal";

let environment = 'kiwi';
let skuArray = ['1020200500313OI6003','104040500024226C003','1040405000250ZJ9001'];

describe('Create order with a specific SKU', () => {
    it('Open the environment', () => {
        Environment.openURL('http://rundeckrds.nonprod.laguna.sd.co.uk:4440/user/login');
        Rundeck.login();
    });
    it('Access the environment ('+environment+')', () => {
        Rundeck.accessEnvironment(environment);
    });
    it('Add products to the ESB for SKUS listed ('+skuArray+')', () => {
        Rundeck.addProductsToESB(skuArray);
    });
    it('Add prices to the ESB for SKUS listed ('+skuArray+')', () => {
        Rundeck.addPricesToESB(skuArray);
    });
    it('Push product and price feeds', () => {
        Rundeck.pushProductAndPriceFeeds();
    });
    it('Ensure product stock on website', () => {
        AdminPortal.login();
        AdminPortal.setStockLevels(skuArray);
    });
});
