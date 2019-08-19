import login from '../../Pages/B2B/login';
import home from "../../Pages/B2B/home";
import results from "../../Pages/B2B/results";

let email = "danrosetest+B2B@gmail.com";
let password = "9Hzghb$v0i5";

describe(specname+' - end to end smoke test script for B2B', () => {
    it('Open the environment and log in as specified user', () => {
        browser.url('/login');
    });
    it('Get products in bag', () => {
        results.multiSelectProducts();
    });

});
