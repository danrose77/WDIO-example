import Environment from '../../Pages/Environment.js';
import Storefinder from "../../Pages/Storefinder";

describe('Store_finder.js - Search for stores by partial postcode', () => {
    it('Go to the storefinder', () => {
        Environment.goToBasePlus('/stores');
    });
    it('I search for store nearest to RG2', () => {
        Storefinder.findTheNearestStoreTo('RG2');
        Storefinder.isTheNearestStore('Reading');
    });
});

describe('Store_finder.js - Search for stores in region', () => {
    it('Go to the storefinder', () => {
        Environment.goToBasePlus('/stores');
    });
    it('I search for stores by country', () => {
        Storefinder.searchForAStoreInCountry();
    });
});

describe('Store_finder.js - Search for gibberish', () => {
    it('Go to the storefinder', () => {
        Environment.goToBasePlus('/stores');
    });
    it('I search for gibberish', () => {
        Storefinder.findTheNearestStoreTo('*%$!£~#');
        Storefinder.noStoresFound();
    });
});

describe('Store_finder.js - Search for a town and select a result', () => {
    it('Go to the storefinder', () => {
        Environment.goToBasePlus('/stores');
    });
    it('I search for store nearest to Cheltenham', () => {
        Storefinder.findTheNearestStoreTo('Cheltenham');
        Storefinder.isTheNearestStore('Cheltenham');
        Storefinder.clickResult(1)
    });
});
