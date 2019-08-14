import Environment from '../../../Pages/B2C/Environment.js';
import Storefinder from "../../../Pages/B2C/Storefinder";

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
