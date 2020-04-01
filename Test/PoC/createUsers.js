import Environment from '../../Pages/B2C/Environment.js';
import Navigation from '../../Pages/B2C/Navigation';
import Search from '../../Pages/B2C/Search';
import Product from '../../Pages/B2C/Product';
import Checkout from '../../Pages/B2C/Checkout';
import Customer from "../../Pages/B2C/Customer";

let emailArray = ['performanceTest1@test.com','performanceTest2@test.com','performanceTest3@test.com'];

describe('Debit card payment from a guest user', () => {
    it('Open the environment', () => {
        Environment.openBaseURL();
    });
    it('Create user', () => {
        let i;
        for (i = 0; i < emailArray.length; i++) {
            Customer.setUpNewAccount(emailArray[i]);
        }
    });
});
