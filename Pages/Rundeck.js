import Page from './Page'
import Screenshot from "../functions/Screenshot";
import OMS from "./OMS";

class Rundeck extends Page {
    get rundeck_username() {
        return $("//input[@id='login']");
    }

    get rundeck_password() {
        return $("//input[@id='password']");
    }

    get rundeck_submitBTN() {
        return $("//button[@type='submit']");
    }

    get rundeck_pjctsrch() {
        return $(".form-control");
    }

    get rundeck_export_to_OMS() {
        return $("//a[contains(text(),'Export to OMS')]");
    }

    get rundeck_export_specific_order_to_OMS() {
        return $("//a[contains(text(),'Export Specific Order to OMS')]");
    }

    get rundeck_order() {
        return $("//input[@name='extra.option.order']");
    }

    get rundeck_site() {
        return $("//input[@name='extra.option.site']");
    }

    get rundeck_execFormRunButton() {
        return $("//button[@id='execFormRunButton']");
    }

    get rundeck_success() {
        return $("//span[contains(@class,'execstate execstatedisplay overall')]");
    }

    // Rundeck projects
    get rundeck_pjct_Amber() {
        return $("//span[contains(text(),'Amber')]");
    }

    get rundeck_pjct_BlackEW1() {
        return $("//span[contains(text(),'Black_eu-west-1')]");
    }

    get rundeck_pjct_Blue() {
        return $("//span[contains(text(),'Blue')]");
    }

    get rundeck_pjct_Brown() {
        return $("//span[contains(text(),'Brown')]");
    }

    get rundeck_pjct_Burgundy() {
        return $("//span[contains(text(),'Burgundy')]");
    }

    get rundeck_pjct_Copper() {
        return $("//span[contains(text(),'Copper')]");
    }

    get rundeck_pjct_Cyan() {
        return $("//span[contains(text(),'Cyan')]");
    }

    get rundeck_pjct_Gray() {
        return $("//span[contains(text(),'Gray')]");
    }

    get rundeck_pjct_Green() {
        return $("//span[contains(text(),'Green')]");
    }

    get rundeck_pjct_Ivory() {
        return $("//span[contains(text(),'Ivory')]");
    }

    get rundeck_pjct_Lilac() {
        return $("//span[contains(text(),'Lilac')]");
    }

    get rundeck_pjct_Magenta() {
        return $("//span[contains(text(),'Magenta')]");
    }

    get rundeck_pjct_Mauve() {
        return $("//span[contains(text(),'Mauve')]");
    }

    get rundeck_pjct_Olive() {
        return $("//span[contains(text(),'Olive')]");
    }

    get rundeck_pjct_Orange() {
        return $("//span[contains(text(),'Orange')]");
    }

    get rundeck_pjct_Peach() {
        return $("//span[contains(text(),'Peach')]");
    }

    get rundeck_pjct_Pink() {
        return $("//span[contains(text(),'Pink')]");
    }

    get rundeck_pjct_Plum() {
        return $("//span[contains(text(),'Plum')]");
    }

    get rundeck_pjct_Purple() {
        return $("//span[contains(text(),'Purple')]");
    }

    get rundeck_pjct_Red() {
        return $("//span[contains(text(),'Red')]");
    }

    get rundeck_pjct_Russet() {
        return $("//span[contains(text(),'Russet')]");
    }

    get rundeck_pjct_Sage() {
        return $("//span[contains(text(),'Sage')]");
    }

    get rundeck_pjct_Slate() {
        return $("//span[contains(text(),'Slate')]");
    }

    get rundeck_pjct_Teal() {
        return $("//span[contains(text(),'Teal')]");
    }

    get rundeck_pjct_Violet() {
        return $("//span[contains(text(),'Violet')]");
    }

    get rundeck_pjct_Yellow() {
        return $("//span[contains(text(),'Yellow')]");
    }
    get user_link() {
        return $(".fa-user");
    }
    get logout_link() {
        return $("//a[contains(text(),'Logout')]");
    }

    login() {
        this.rundeck_username.setValue("danielr");
        this.rundeck_password.setValue("KL8AM67NaJ5d9KvF");
        this.rundeck_submitBTN.click();
    }
    logout() {
        this.user_link.click();
        browser.pause(500);
        this.logout_link.click();
        browser.pause(500);
    }
    accessEnvironment(environment) {
        browser.pause(2000);
        let enviroLink = $("//span[contains(text(),'" + environment + "')]");
        enviroLink.click();
    }

    addProductsToESB(skuArray) {
        let counter = 0;
        while (counter !== skuArray.length) {
            OMS.APRD_FlagProductsToESRB[1].click();

            OMS.APRD_inputPLUS.setValue(skuArray[counter]);
            OMS.APRD_inputSKU.setValue(skuArray[counter]);
            OMS.APRD_RunButton.click();

            browser.pause(3000);
            let runStatus = OMS.APRD_RunStatus.getAttribute('data-execstate');
            while (runStatus !== 'SUCCEEDED') {
                browser.pause(2000);
                runStatus = OMS.APRD_RunStatus.getAttribute('data-execstate');
            }
            browser.back();
            browser.pause(2000);
            browser.back();
            browser.pause(2000);
            counter++;
        }
    }

    addPricesToESB(skuArray) {
        let counter = 0;
        while (counter !== skuArray.length) {
            OMS.APRD_FlagPricesToESRB[1].click();

            OMS.APRD_inputSKU.setValue(skuArray[counter]);
            OMS.APRD_RunButton.click();

            browser.pause(3000);
            let runStatus = OMS.APRD_RunStatus.getAttribute('data-execstate');
            while (runStatus !== 'SUCCEEDED') {
                browser.pause(2000);
                runStatus = OMS.APRD_RunStatus.getAttribute('data-execstate');
            }
            browser.back();
            browser.pause(2000);
            browser.back();
            browser.pause(2000);
            counter++;
        }
    }

    pushProductAndPriceFeeds() {
        OMS.APRD_ProductFeed[1].click();
        OMS.APRD_RunButton.click();

        browser.pause(3000);
        let runStatus = OMS.APRD_RunStatus.getAttribute('data-execstate');
        while (runStatus !== 'SUCCEEDED') {
            browser.pause(2000);
            runStatus = OMS.APRD_RunStatus.getAttribute('data-execstate');
        }
        browser.back();
        browser.pause(2000);
        browser.back();
        browser.pause(2000);

        OMS.APRD_PriceFeed[2].click();
        OMS.APRD_RunButton.click();

        browser.pause(3000);
        runStatus = OMS.APRD_RunStatus.getAttribute('data-execstate');
        while (runStatus !== 'SUCCEEDED') {
            browser.pause(2000);
            runStatus = OMS.APRD_RunStatus.getAttribute('data-execstate');
        }
        browser.back();
        browser.pause(2000);
        browser.back();
        browser.pause(2000);
    }

    orderExport(orderNo) {
        browser.url("https://rundeckrds-ext.nonprod.sd.co.uk/user/login");
        this.rundeck_username.waitForExist();
        this.login();
        this.rundeck_pjctsrch.waitForExist();
        switch (envcol) {
            case 'amber':
                this.rundeck_pjct_Amber.click();
                break;
            case 'black':
                this.rundeck_pjct_BlackEW1.click();
                break;
            case 'blue':
                this.rundeck_pjct_Blue.click();
                break;
            case 'brown':
                this.rundeck_pjct_Brown.click();
                break;
            case 'burgundy':
                this.rundeck_pjct_Burgundy.click();
                break;
            case 'copper':
                this.rundeck_pjct_Copper.click();
                break;
            case 'cyan':
                this.rundeck_pjct_Cyan.click();
                break;
            case 'gray':
                this.rundeck_pjct_Gray.click();
                break;
            case 'green':
                this.rundeck_pjct_Green.click();
                break;
            case 'ivory':
                this.rundeck_pjct_Ivory.click();
                break;
            case 'lilac':
                this.rundeck_pjct_Lilac.click();
                break;
            case 'magenta':
                this.rundeck_pjct_Magenta.click();
                break;
            case 'mauve':
                this.rundeck_pjct_Mauve.click();
                break;
            case 'olive':
                this.rundeck_pjct_Olive.click();
                break;
            case 'orange':
                this.rundeck_pjct_Orange.click();
                break;
            case 'peach':
                this.rundeck_pjct_Peach.click();
                break;
            case 'pink':
                this.rundeck_pjct_Pink.click();
                break;
            case 'plum':
                this.rundeck_pjct_Plum.click();
                break;
            case 'purple':
                this.rundeck_pjct_Purple.click();
                break;
            case 'red':
                this.rundeck_pjct_Red.click();
                break;
            case 'russet':
                this.rundeck_pjct_Russet.click();
                break;
            case 'sage':
                this.rundeck_pjct_Sage.click();
                break;
            case 'slate':
                this.rundeck_pjct_Slate.click();
                break;
            case 'teal':
                this.rundeck_pjct_Teal.click();
                break;
            case 'violet':
                this.rundeck_pjct_Violet.click();
                break;
            case 'yellow':
                this.rundeck_pjct_Yellow.click();
        }
        try {
            this.rundeck_export_specific_order_to_OMS.click();
        } catch (e) {
        }
        if (orderNo !== undefined) {
            this.rundeck_order.setValue(orderNo);
        } else {
            this.rundeck_order.setValue(referenceNumber);
        }
        let sitename = "";
        switch (country) {
            case 'Australia':
                sitename = "superdry_au";
                break;
            case 'Belgium':
                sitename = "superdry_be";
                break;
            case 'Canada':
                sitename = "superdry_ca";
                break;
            case 'Switzerland':
                sitename = "superdry_cn";
                break;
            case 'China':
                sitename = "superdry_ch";
                break;
            case 'UK':
                sitename = "superdry_com";
                break;
            case 'Germany':
                sitename = "superdry_de";
                break;
            case 'Denmark':
                sitename = "superdry_dk";
                break;
            case 'Spain':
                sitename = "superdry_es";
                break;
            case 'Finland':
                sitename = "superdry_fi";
                break;
            case 'France':
                sitename = "superdry_fr";
                break;
            case 'Italy':
                sitename = "superdry_it";
                break;
            case 'Netherlands':
                sitename = "superdry_nl";
                break;
            case 'Norway':
                sitename = "superdry_no";
                break;
            case 'Sweden':
                sitename = "superdry_sw";
                break;
            case 'Taiwan':
                sitename = "superdry_tw";
                break;
            case 'Ireland':
                sitename = "superdry_ie";
                break;
            case 'US':
                sitename = "superdry_us";
                break;
            case 'Poland':
                sitename = "superdry_pl";
        }
        this.rundeck_site.setValue(sitename);
        Screenshot.viewport();
        this.rundeck_execFormRunButton.click();
        this.rundeck_success.waitForExist();
        browser.pause(5000);
        Screenshot.viewport();
    }
}

export default new Rundeck();
