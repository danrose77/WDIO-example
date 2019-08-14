import Environment from '../../../Pages/B2C/Environment.js';
import Storefinder from "../../../Pages/B2C/Storefinder";

describe(specname+' - Search for stores in region', () => {
    it('Go to the storefinder', () => {
        Environment.goToBasePlus('/stores');
    });
    it('I search for stores by country', () => {
        Storefinder.searchForAStoreInCountry();
    });
});
