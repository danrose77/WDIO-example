import Environment from '../../../Pages/Environment.js';
import Checkout from "../../../Pages/Checkout";

describe(specname+' - Place an order with international delivery type option with a non standard delivery speed', () => {
    it('Open the environment', () => {
        Environment.openBaseURL();
    });
    it('Select a product with delivery type options', () => {
        Checkout.selectProductWithDeliveryTypeOptions();
        Checkout.selectInternationalShippingNonStandardSpeedAndPay();
    });
});
