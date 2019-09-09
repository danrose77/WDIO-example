import Page from './Page'

class IE_IBMsterling extends Page {

    get expandCollapse() {
        return $("//*[contains(@href, 'expandCollapse')]");
    }

    get overridelink() {
        return $("//*[contains(@id, 'overridelink')]");
    }

    get UserId() {
        return $("//input[@name='UserId']");
    }

    get Password() {
        return $("//*[contains(@name, 'Password')]");
    }

    get btnLogin() {
        return $("//*[contains(@name, 'btnLogin')]");
    }

    get ApplicationConsoleTopMenu() {
        // Options are: 
        // 0 - Alerts
        // 1 - Order
        // 2 - Inventory
        // 3 - Supply
        // 4 - Logistics
        // 5 - Reverse Logistics
        // 6 - Business Intelligence
        // 7 - Configuration
        // 8 - System
        // 9 - Help
        return $$("//tr[@id='mytr'] //td");
    }

    get OrderSearch() {
        return $('*=Order Search');
    }
    get OrderNo() {
        return $("//*[contains(@name, 'xml:/Order/@OrderNo')]");
    }

    goToOrderNumber(OrderNo) {
        this.OrderSearch.click();
        browser.pause(2000);
        browser.keys('\uE004');
        browser.keys('\uE004');
        browser.keys('\uE004');
        browser.keys('\uE004');
        browser.keys('\uE004');
        browser.keys('\uE004');
        browser.keys('\uE004');
        browser.keys('\uE004');
        browser.keys('\uE004');
        browser.keys('\uE004');
        browser.keys(OrderNo);
        browser.keys('\uE006');
    }

    handleWarningPage() {
        try {
            this.expandCollapse.click();
            browser.pause(1000);
            this.overridelink.click();
            browser.pause(1000);
        } catch (e) {
            console.log("No need to handle warning page")
        }
    }
    login() {
        browser.pause(1000);
        this.UserId.setValue("admin");
        browser.pause(1000);
        this.Password.setValue(" ");
        this.Password.clearValue();
        this.Password.setValue("password");
        this.btnLogin.click();
        browser.pause(5000);
    }
}

export default new IE_IBMsterling();
