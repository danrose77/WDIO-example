import Environment from '../../../Pages/B2C/Environment.js';
import Storefinder from "../../../Pages/B2C/Storefinder";

describe('Search for gibberish', () => {
    it('Go to the storefinder', () => {
        Environment.goToBasePlus('/stores');
    });
    it('I search for gibberish', () => {
        Storefinder.findTheNearestStoreTo('*%$!£~#');
        Storefinder.noStoresFound();
    });
});
