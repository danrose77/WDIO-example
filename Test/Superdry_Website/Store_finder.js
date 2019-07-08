import Environment from '../../Pages/Environment.js';
import Storefinder from "../../Pages/Storefinder";

describe(specname+' - Search for stores by partial postcode', () => {
    it('Go to the storefinder', () => {
        Environment.goToBasePlus('/stores');
    });
    it('I search for store nearest to RG2', () => {
        Storefinder.findTheNearestStoreTo('RG2');
        Storefinder.isTheNearestStore('Reading');
    });
});

describe(specname+' - Search for stores in region', () => {
    it('Go to the storefinder', () => {
        Environment.goToBasePlus('/stores');
    });
    it('I search for stores by country', () => {
        Storefinder.searchForAStoreInCountry();
    });
});

describe(specname+' - Search for gibberish', () => {
    it('Go to the storefinder', () => {
        Environment.goToBasePlus('/stores');
    });
    it('I search for gibberish', () => {
        Storefinder.findTheNearestStoreTo('*%$!£~#');
        Storefinder.noStoresFound();
    });
});

describe(specname+' - Search for a town and select a result', () => {
    it('Go to the storefinder', () => {
        Environment.goToBasePlus('/stores');
    });
    it('I search for store nearest to Cheltenham', () => {
        Storefinder.findTheNearestStoreTo('Cheltenham');
        Storefinder.isTheNearestStore('Cheltenham');
        Storefinder.clickResult(1)
    });
});
