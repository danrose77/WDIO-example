import * as assert from "chai";

class Page {

    open(path) {
        if (!path) {
            browser.url("/")
        } else {
            browser.url(path)
        }
    }
    customer() {
        this.First_name = customerData["First_name"];
        this.Last_name = customerData["Last_name"];
        this.Phone = customerData["Phone"];
        this.Address_line1 = customerData["Address_line1"];
        this.Address_line2 = customerData["Address_line2"];
        this.City = customerData["City"];
        this.Region = customerData["Region"];
        this.Postcode = customerData["Postcode"];
        this.cuscountry = customerData["Country"];
        this.password = "Pineapple77";
        this.del_YorN = customerData["del_YorN"];
        this.del_address1 = customerData["del_address1"];
        this.del_city = customerData["del_city"];
        this.del_postcode = customerData["del_postcode"];
        this.del_country = customerData["del_country"];
        this.creditAmount = customerData["creditAmount"];
        if (this.creditAmount !== "") {
            this.creditAmount = parseInt(this.creditAmount);
        }
        this.creditTimes = customerData["creditTimes"];
        if (this.creditTimes !== "") {
            this.creditTimes = parseInt(this.creditTimes);
        }
        this.staffPercent = customerData["staffPercent"];
        if (this.staffPercent !== "") {
            this.staffPercent = parseInt(this.staffPercent);
        }
        this.giftcardCode1 = customerData["giftcardCode1"];
        this.giftcardPIN1 = customerData["giftcardPIN1"];
        this.giftcardCode2 = customerData["giftcardCode2"];
        this.giftcardPIN2 = customerData["giftcardPIN2"];
    }
    returnSuffix() {
        let currentURL = browser.getUrl();
        let siteSuffix = currentURL.split("/");
        siteSuffix = siteSuffix[3];
        return siteSuffix
    }

    returnPrefix() {
        let currentURL = browser.getUrl();
        let httpStart = currentURL.slice(0, 5);
        let sitePrefix = "";
        if (httpStart === "https") {
            sitePrefix = currentURL.slice(8, 10);
        } else {
            sitePrefix = currentURL.slice(7, 9);
        }
        let siteSuffix = this.returnSuffix();
        if (siteSuffix === "us") {
            sitePrefix = "US";
        }
        return sitePrefix
    }
}

export default Page
