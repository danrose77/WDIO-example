import Environment from '../../../Pages/B2C/Environment.js';
import Storefinder from "../../../Pages/B2C/Storefinder";

describe(specname+' - Search for stores by partial postcode', () => {
    it('Go to the storefinder', () => {
        Environment.goToBasePlus('/stores');
    });
    it('I search for store nearest to RG2', () => {
        Storefinder.findTheNearestStoreTo('RG2');
        Storefinder.isTheNearestStore('Reading');
    });
});
