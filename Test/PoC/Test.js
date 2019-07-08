import Environment from '../../Pages/Environment.js';
import objectLength from "../../functions/objectLength";
import GetRandom from "../../functions/GetRandom";
import Navigation from "../../Pages/Navigation";
import Search from "../../Pages/Search";
import Product from "../../Pages/Product";
import Screenshot from "../../functions/Screenshot";

import lighthouse from 'lighthouse';
import chromeLauncher from 'chrome-launcher';

describe(specname+' - Debit card payment from a guest user', () => {
    it('Open the environment', () => {
        browser.execute(() => {
            function launchChromeAndRunLighthouse(url, opts, config = null) {
                return chromeLauncher.launch({chromeFlags: opts.chromeFlags}).then(chrome => {
                    opts.port = chrome.port;
                    return lighthouse(url, opts, config).then(results => {
                        // use results.lhr for the JS-consumeable output
                        // https://github.com/GoogleChrome/lighthouse/blob/master/types/lhr.d.ts
                        // use results.report for the HTML/JSON/CSV output as a string
                        // use results.artifacts for the trace/screenshots/other specific case you need (rarer)
                        return chrome.kill().then(() => results.lhr)
                    });
                });
            }

            const opts = {
                chromeFlags: ['--show-paint-rects']
            };

// Usage:
            launchChromeAndRunLighthouse('https://www.superdry.com', opts).then(results => {
                // Use results!
            });
        })

    });
});
