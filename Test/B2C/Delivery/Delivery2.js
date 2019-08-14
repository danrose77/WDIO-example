import Environment from '../../../Pages/B2C/Environment.js';
import Checkout from "../../../Pages/B2C/Checkout";

describe(specname+' - Place an order with click and collect delivery type option', () => {
    it('Open the environment', () => {
        Environment.openBaseURL();
    });
    it('Select a product with delivery type options', () => {
        Checkout.selectProductWithDeliveryTypeOptions();
        Checkout.selectClickAndCollectAndPay();
    });
});
