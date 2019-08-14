import Environment from '../../../Pages/B2C/Environment.js';
import Checkout from "../../../Pages/B2C/Checkout";

describe(specname+' - Place order with a non standard delivery speed', () => {
    it('Open the environment', () => {
        Environment.openBaseURL();
    });
    it('Select a product with delivery speed options and place order with one of those options', () => {
        Checkout.selectProductWithDeliverySpeedOptions();
        Checkout.selectDeliverySpeedOptionAndPay();
    });
});
