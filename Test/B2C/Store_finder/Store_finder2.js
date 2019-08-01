import Environment from '../../../Pages/Environment.js';
import Storefinder from "../../../Pages/Storefinder";

describe(specname+' - Search for stores in region', () => {
    it('Go to the storefinder', () => {
        Environment.goToBasePlus('/stores');
    });
    it('I search for stores by country', () => {
        Storefinder.searchForAStoreInCountry();
    });
});
