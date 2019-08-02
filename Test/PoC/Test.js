import Environment from '../../Pages/Environment.js';
import Navigation from "../../Pages/Navigation";
import Search from "../../Pages/Search";
import Product from "../../Pages/Product";

describe(specname + ' - Check all menu links', () => {
    it('Open the environment', () => {
        Environment.openBaseURL();
    });
    it('Test JS', () => {
        let string = '79,99&nbsp;â‚¬';
        string = string.replace(/[^0-9]+|\s+/gmi, "");
        console.log(string);


    });
});
