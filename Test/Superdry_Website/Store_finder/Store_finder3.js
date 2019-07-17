import Environment from '../../../Pages/Environment.js';
import Storefinder from "../../../Pages/Storefinder";

describe(specname+' - Search for gibberish', () => {
    it('Go to the storefinder', () => {
        Environment.goToBasePlus('/stores');
    });
    it('I search for gibberish', () => {
        Storefinder.findTheNearestStoreTo('*%$!£~#');
        Storefinder.noStoresFound();
    });
});
