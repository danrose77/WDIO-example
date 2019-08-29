import performance from "../../functions/performance";
import write from "../../functions/write";

// Set mobile = true to emulate mobile conditions
let mobile = true;
// Available profile options are: 'offline','GPRS','Regular 2G','Good 2G','Regular 3G','Good 3G','Regular 4G','DSL','Wifi','online'
let mobileprofile = 'Good 3G';

let PS1 = "";
let PS2 = "";
let Metrics1 = {};
let Metrics2 = {};
let site1 = "https://www.superdry.com/";
let site2 = "";

describe('Test page performance', () => {
    if (mobile === true) {
        it( 'should emulate mobile', () => {
            browser.setWindowSize(400, 900);
        });
    }
    it('should performance test site 1', () => {
        if (mobile === true) {
            browser.enablePerformanceAudits({
                networkThrottling: mobileprofile
            });
        } else {
            browser.enablePerformanceAudits();
        }
        browser.url(site1);
        let performanceScore = browser.getPerformanceScore();
        performanceScore = performance.performanceScore100(performanceScore);
        PS1 = performanceScore;
        Metrics1 = browser.getMetrics();
        browser.disablePerformanceAudits();
    });
});
describe('Test page performance', () => {
    if (mobile === true) {
        it( 'should emulate mobile', () => {
            browser.setWindowSize(400, 900);
        });
    }
    it('should performance test site 2', () => {
        if (mobile === true) {
            browser.enablePerformanceAudits({
                networkThrottling: mobileprofile
            });
        } else {
            browser.enablePerformanceAudits();
        }
        browser.url('/');
        site2 = browser.getUrl();
        let NewPerformanceScore = browser.getPerformanceScore();
        NewPerformanceScore = performance.performanceScore100(NewPerformanceScore);
        PS2 = NewPerformanceScore;
        Metrics2 = browser.getMetrics();
        browser.disablePerformanceAudits();
    });
    it('should write test results to file', () => {
        let screendate = new Date();
        let hour = ("0" + screendate.getHours()).slice(-2);
        let minute = ("0" + screendate.getMinutes()).slice(-2);
        write.toPerformanceLog(specname+ ",Test conducted:," + hour + ":" + minute);
        write.toPerformanceLog(' ,' + site1 + ',' + site2);
        write.toPerformanceLog('Google site speed index,' + Metrics1.speedIndex + ',' + Metrics2.speedIndex);
        write.toPerformanceLog('First Meaningful Paint,' + Metrics1.firstMeaningfulPaint + ',' + Metrics2.firstMeaningfulPaint);
        write.toPerformanceLog('First Interactive,' + Metrics1.firstInteractive + ',' + Metrics2.firstInteractive);
        write.toPerformanceLog('Last Visual Change,' + Metrics1.lastVisualChange + ',' + Metrics2.lastVisualChange);
        write.toPerformanceLog('Google performance score,' + PS1 + ',' + PS2);
        write.toPerformanceLog(' ');
    });
});
