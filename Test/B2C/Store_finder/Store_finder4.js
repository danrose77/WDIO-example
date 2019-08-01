import Environment from '../../../Pages/Environment.js';
import Storefinder from "../../../Pages/Storefinder";

describe(specname+' - Search for stores by partial postcode', () => {
    it('Go to the storefinder', () => {
        Environment.goToBasePlus('/stores');
    });
    it('I search for store nearest to RG2', () => {
        Storefinder.findTheNearestStoreTo('RG2');
        Storefinder.isTheNearestStore('Reading');
    });
});
