import login from '../../Pages/B2B/login';
import home from "../../Pages/B2B/home";
import results from "../../Pages/B2B/results";
import shoppingbag from "../../Pages/B2B/shoppingbag";

const email = "danrosetest+B2B@gmail.com";
const password = "9Hzghb$v0i5";

describe('End to end smoke test script for B2B', () => {
    it('Open the environment and log in as specified user', () => {
        browser.url('/login');
        login.login(email, password);
    });
    it('Get products in bag', () => {
        home.getRandomProductSection();
        results.multiSelectProducts(5);
    });
    it('Go to shopping bag and assign quantities', () => {
        home.goToShoppingBag();
        shoppingbag.addASelectionOfSizesForProducts();
        shoppingbag.create_order();
    });
});
