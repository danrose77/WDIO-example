import performance from "../../functions/performance";

let tested_site_URL = "";
//let comparisonSite = 'https://www.superdry.com';
let comparisonSite = 'https://webdriver.io';
let metrics = "";
let performanceScore = "";
let SDmtrcs = "";
let SDprfrmanceScore = "";
let metricsspeedIndex = "";
let SDmtrcsspeedIndex = "";
let metricsfirstMeaningfulPaint = "";
let SDmtrcsfirstMeaningfulPaint = "";
let metricsfirstInteractive = "";
let SDmtrcsfirstInteractive = "";
let metricslastVisualChange = "";
let SDmtrcslastVisualChange = "";
before(() => {
    browser.enablePerformanceAudits();
});
describe('Test environment home page', () => {
    /*
    it( 'should emulate mobile', () => {
        browser.setWindowSize(400, 900);
    });
     */
    it('should performance test', () => {
        browser.url('/');
        tested_site_URL = browser.getUrl();
        browser.url(tested_site_URL);
        browser.pause(3000);
        //metrics = browser.getMetrics();
        performanceScore = browser.getPerformanceScore();
        //metricsspeedIndex = metrics.speedIndex;
        //metricsfirstMeaningfulPaint = metrics.firstMeaningfulPaint;
        //metricsfirstInteractive = metrics.firstInteractive;
        //metricslastVisualChange = metrics.lastVisualChange;
        performanceScore = performance.performanceScore100(performanceScore);
        console.log(performanceScore);
    });
});
describe('Comparison site home page: ' + comparisonSite, () => {
    /*
    it( 'should emulate mobile', () => {
        browser.setWindowSize(400, 900);
    });
     */
    it('should performance test', () => {
        browser.url(comparisonSite);
        browser.pause(3000);
        //SDmtrcs = browser.getMetrics();
        SDprfrmanceScore = browser.getPerformanceScore();
        //SDmtrcsspeedIndex = SDmtrcs.speedIndex;
        //SDmtrcsfirstMeaningfulPaint = SDmtrcs.firstMeaningfulPaint;
        //SDmtrcsfirstInteractive = SDmtrcs.firstInteractive;
        //SDmtrcslastVisualChange = SDmtrcs.lastVisualChange;
        SDprfrmanceScore = performance.performanceScore100(SDprfrmanceScore);
        console.log(SDprfrmanceScore);
    });
    it('should write test results to console', () => {
        console.log('');
        console.log('');
        console.log('                           ' + tested_site_URL + ' - ' + comparisonSite);
        //console.log('Google site speed index  = ' + metricsspeedIndex + performance.generateSpacing(tested_site_URL.length - metricsspeedIndex.toString().length) + ' - ' + SDmtrcsspeedIndex);
        //console.log('First Meaningful Paint   = ' + metricsfirstMeaningfulPaint + performance.generateSpacing(tested_site_URL.length - metricsfirstMeaningfulPaint.toString().length) + ' - ' + SDmtrcsfirstMeaningfulPaint);
        //console.log('First Interactive        = ' + metricsfirstInteractive + performance.generateSpacing(tested_site_URL.length - metricsfirstInteractive.toString().length) + ' - ' + SDmtrcsfirstInteractive);
        //console.log('Last Visual Change       = ' + metricslastVisualChange + performance.generateSpacing(tested_site_URL.length - metricslastVisualChange.toString().length) + ' - ' + SDmtrcslastVisualChange);
        console.log('Google performance score = ' + performanceScore + performance.generateSpacing(tested_site_URL.length - performanceScore.toString().length) + ' - ' + SDprfrmanceScore);
    });
});
after(() => {
    browser.disablePerformanceAudits();
});
