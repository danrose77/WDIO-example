import Environment from '../../Pages/Environment.js';
import Customer from "../../Pages/Customer";
import AdminPortal from "../../Pages/AdminPortal";
import Givex from "../../Pages/Givex";
import Navigation from "../../Pages/Navigation";
import GetRandom from "../../functions/GetRandom";
import Screenshot from "../../functions/Screenshot";

let tick = 0;
let counter = 1;
let subcounter = 1;
let topMenuNumber = 0;
let t1Number = 0;
let t2Number = 0;
let finishedpt1 = false;
let finishedpt2 = false;
let finishedpt3 = false;
let finishedpt4 = false;

describe(specname + ' - Check all menu links', () => {
    it('Open the environment', () => {
        Environment.openBaseURL();
    });
});
