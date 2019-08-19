import Page from '../Page'
import * as yaml from "js-yaml";
import Screenshot from "../../functions/Screenshot";
import write from "../../functions/write";

class Template extends Page {
    get elements() {
        return $$("name");
    }
    get anElement() {
        return $('elementname');
    }

    // Functions
    functionName() {
    }
}

export default new Template();
