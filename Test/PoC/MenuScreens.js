import Environment from '../../Pages/B2C/Environment.js';
import Navigation from "../../Pages/B2C/Navigation";
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

describe('Check all menu links', () => {
    it('Open the environment', () => {
        Environment.openBaseURL();
    });

    it('Check mens', () => {
        while (finishedpt1 !== true) {
            browser.url("/");
            Navigation.acceptCookiesPrompt();
            Navigation.hamburger.click();
            Navigation.backToBaseMenu();
            let lvl1MenuAlt = Navigation.menu_tier1[tick].getAttribute('alt');
            topMenuNumber = Navigation.menu_tier1.length;
            browser.pause(500);
            GetRandom.element(Navigation.menu_tier1, undefined, 1, tick);
            t1Number = Navigation.menu_subtiers.length;
            if (counter !== t1Number) {
                let t1name = Navigation.menu_subtiers[counter].getHTML(false);
                t1name = t1name.split(">");
                t1name = t1name[4].split("<");
                t1name = t1name[0].trim();
                t1name = lvl1MenuAlt + " - " + t1name;
                GetRandom.element(Navigation.menu_subtiers, undefined, 1, counter);
                let classAttrib = Navigation.body.getAttribute('class').trim();
                if (classAttrib === 'error-page sana two_tone') {
                    Screenshot.viewport(t1name);
                    console.log('No T3 for ' + t1name);
                    counter++;
                } else {
                    t2Number = Navigation.menu_subtiers.length;
                    if (subcounter !== t2Number) {
                        let shotname = Navigation.menu_subtiers[subcounter].getHTML(false);
                        shotname = shotname.split(">");
                        shotname = shotname[3].split("<");
                        shotname = shotname[0].trim();
                        shotname = t1name + " - " + shotname;
                        console.log(shotname);
                        try {
                            GetRandom.element(Navigation.menu_subtiers, undefined, 1, subcounter);
                            browser.pause(5000);
                            Screenshot.viewport(shotname);
                        } catch (e) {
                            Screenshot.viewport(shotname);
                            console.log('No T3 for ' + shotname);
                        }
                        subcounter++;
                        if (subcounter === t2Number) {
                            subcounter = 1;
                            counter++;
                        }
                    }
                }
                if (counter === t1Number) {
                    subcounter = 1;
                    counter = 1;
                    tick++;
                }
            } else {
                subcounter = 1;
                counter = 1;
                tick++;
                finishedpt1 = true;
            }
        }
    });
    it('Check womens', () => {
        while (finishedpt2 !== true) {
            browser.url("/");
            Navigation.acceptCookiesPrompt();
            Navigation.hamburger.click();
            Navigation.backToBaseMenu();
            let lvl1MenuAlt = Navigation.menu_tier1[tick].getAttribute('alt');
            topMenuNumber = Navigation.menu_tier1.length;
            browser.pause(500);
            GetRandom.element(Navigation.menu_tier1, undefined, 1, tick);
            t1Number = Navigation.menu_subtiers.length;
            if (counter !== t1Number) {
                let t1name = Navigation.menu_subtiers[counter].getHTML(false);
                t1name = t1name.split(">");
                t1name = t1name[4].split("<");
                t1name = t1name[0].trim();
                t1name = lvl1MenuAlt + " - " + t1name;
                GetRandom.element(Navigation.menu_subtiers, undefined, 1, counter);
                let classAttrib = Navigation.body.getAttribute('class').trim();
                if (classAttrib === 'error-page sana two_tone') {
                    Screenshot.viewport(t1name);
                    console.log('No T3 for ' + t1name);
                    counter++;
                } else {
                    t2Number = Navigation.menu_subtiers.length;
                    if (subcounter !== t2Number) {
                        let shotname = Navigation.menu_subtiers[subcounter].getHTML(false);
                        shotname = shotname.split(">");
                        shotname = shotname[3].split("<");
                        shotname = shotname[0].trim();
                        shotname = t1name + " - " + shotname;
                        console.log(shotname);
                        try {
                            GetRandom.element(Navigation.menu_subtiers, undefined, 1, subcounter);
                            browser.pause(5000);
                            Screenshot.viewport(shotname);
                        } catch (e) {
                            Screenshot.viewport(shotname);
                            console.log('No T3 for ' + shotname);
                        }
                        subcounter++;
                        if (subcounter === t2Number) {
                            subcounter = 1;
                            counter++;
                        }
                    }
                }
                if (counter === t1Number) {
                    subcounter = 1;
                    counter = 1;
                    tick++;
                }
            } else {
                subcounter = 1;
                counter = 1;
                tick++;
                finishedpt2 = true;
            }
        }
    });
    it('Check sport', () => {
        while (finishedpt3 !== true) {
            browser.url("/");
            Navigation.acceptCookiesPrompt();
            Navigation.hamburger.click();
            Navigation.backToBaseMenu();
            let lvl1MenuAlt = Navigation.menu_tier1[tick].getAttribute('alt');
            topMenuNumber = Navigation.menu_tier1.length;
            browser.pause(500);
            GetRandom.element(Navigation.menu_tier1, undefined, 1, tick);
            t1Number = Navigation.menu_subtiers.length;
            if (counter !== t1Number) {
                let t1name = Navigation.menu_subtiers[counter].getHTML(false);
                t1name = t1name.split(">");
                t1name = t1name[4].split("<");
                t1name = t1name[0].trim();
                t1name = lvl1MenuAlt + " - " + t1name;
                GetRandom.element(Navigation.menu_subtiers, undefined, 1, counter);
                let classAttrib = Navigation.body.getAttribute('class').trim();
                if (classAttrib === 'error-page sana two_tone') {
                    Screenshot.viewport(t1name);
                    console.log('No T3 for ' + t1name);
                    counter++;
                } else {
                    t2Number = Navigation.menu_subtiers.length;
                    if (subcounter !== t2Number) {
                        let shotname = Navigation.menu_subtiers[subcounter].getHTML(false);
                        shotname = shotname.split(">");
                        shotname = shotname[3].split("<");
                        shotname = shotname[0].trim();
                        shotname = t1name + " - " + shotname;
                        console.log(shotname);
                        try {
                            GetRandom.element(Navigation.menu_subtiers, undefined, 1, subcounter);
                            browser.pause(5000);
                            Screenshot.viewport(shotname);
                        } catch (e) {
                            Screenshot.viewport(shotname);
                            console.log('No T3 for ' + shotname);
                        }
                        subcounter++;
                        if (subcounter === t2Number) {
                            subcounter = 1;
                            counter++;
                        }
                    }
                }
                if (counter === t1Number) {
                    subcounter = 1;
                    counter = 1;
                    tick++;
                }
            } else {
                subcounter = 1;
                counter = 1;
                tick++;
                finishedpt3 = true;
            }
        }
    });
    it('Check outlet', () => {
        while (finishedpt4 !== true) {
            browser.url("/");
            Navigation.acceptCookiesPrompt();
            Navigation.hamburger.click();
            Navigation.backToBaseMenu();
            let lvl1MenuAlt = Navigation.menu_tier1[tick].getAttribute('alt');
            topMenuNumber = Navigation.menu_tier1.length;
            browser.pause(500);
            GetRandom.element(Navigation.menu_tier1, undefined, 1, tick);
            t1Number = Navigation.menu_subtiers.length;
            if (counter !== t1Number) {
                let t1name = Navigation.menu_subtiers[counter].getHTML(false);
                t1name = t1name.split(">");
                t1name = t1name[4].split("<");
                t1name = t1name[0].trim();
                t1name = lvl1MenuAlt + " - " + t1name;
                GetRandom.element(Navigation.menu_subtiers, undefined, 1, counter);
                let classAttrib = Navigation.body.getAttribute('class').trim();
                if (classAttrib === 'error-page sana two_tone') {
                    Screenshot.viewport(t1name);
                    console.log('No T3 for ' + t1name);
                    counter++;
                } else {
                    t2Number = Navigation.menu_subtiers.length;
                    if (subcounter !== t2Number) {
                        let shotname = Navigation.menu_subtiers[subcounter].getHTML(false);
                        shotname = shotname.split(">");
                        shotname = shotname[3].split("<");
                        shotname = shotname[0].trim();
                        shotname = t1name + " - " + shotname;
                        console.log(shotname);
                        try {
                            GetRandom.element(Navigation.menu_subtiers, undefined, 1, subcounter);
                            browser.pause(5000);
                            Screenshot.viewport(shotname);
                        } catch (e) {
                            Screenshot.viewport(shotname);
                            console.log('No T3 for ' + shotname);
                        }
                        subcounter++;
                        if (subcounter === t2Number) {
                            subcounter = 1;
                            counter++;
                        }
                    }
                }
                if (counter === t1Number) {
                    subcounter = 1;
                    counter = 1;
                    tick++;
                }
            } else {
                subcounter = 1;
                counter = 1;
                tick++;
                finishedpt4 = true;
            }
        }
    });
});
