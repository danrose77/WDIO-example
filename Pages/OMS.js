import Page from './Page'
import Screenshot from "../functions/Screenshot";
import Environment from "./B2C/Environment";
import Product from "./B2C/Product";
import objectLength from "../functions/objectLength";

class OMS extends Page {
    get Username() {
        return $('//input[@name="username"]');
    }

    get Password() {
        return $('//input[@id="loginPassword"]');
    }

    get UserMenu() {
        return $('li:nth-child(2) > a > span.idxHeaderDropDownArrow');
    }

    get LogoutBTN() {
        return $('#dijit_MenuItem_3_text');
    }

    get OrderNumber() {
        return $('//*[@id="idx_form_TextBox_0"]');
    }

    get FindOrderBTN() {
        return $('//*[@id="dijit_form_Button_1_label"]');
    }

    get CloseOrder() {
        return $("//div[@class='dijitTabInner dijitTabContent idxButtonDerived dijitClosable dijitTab dijitTabChecked dijitChecked']//span[@title='Close']");
    }

    get TableItem() {
        return $("//td[4]//div[1]//div[1]//span[1]");
    }

    get QuantityValue() {
        return $$("//td[@aria-label='Quantity']");
    }

    get cancelOrderLink() {
        return $("//a[contains(text(),'Cancel Products')]");
    }

    get cancelNext() {
        return $$("//span[contains(text(),'Next')]");
    }

    get cancelOk() {
        return $$("//span[contains(text(),'Ok')]");
    }

    get cancelConfirm() {
        return $$("//span[contains(text(),'Confirm')]");
    }

    get applyHold() {
        return $("//a[contains(text(),'Apply Holds')]");
    }

    get saveHold() {
        return $$("//span[contains(text(),'Save')]");
    }

    get OMS_SQL_username() {
        return $("//input[@name='YFSEnvironment.userId']");
    }

    get OMS_SQL_password() {
        return $("//input[@name='YFSEnvironment.password']");
    }

    get OMS_SQL_entry() {
        return $("//textarea[@id='SQLStatement']");
    }

    get OMS_SQL_run() {
        return $("//span[contains(text(),'Run query')]");
    }

    get OMS_SQL_results() {
        return $$("td.nowrapsearchlabel");
    }

    get API_InvokeFlow() {
        return $("//input[@value='InvokeFlow']");
    }

    get API_ServiceName() {
        return $("//input[@name='ServiceName']");
    }

    get API_ApiName() {
        return $("//select[@id='ApiName']");
    }

    get API_userId() {
        return $("//table[@cellpadding='7']//input[@name='YFSEnvironment.userId']");
    }

    get API_password() {
        return $("//table[@cellpadding='7']//input[@name='YFSEnvironment.password']");
    }

    get API_Message() {
        return $("//textarea[@id='InteropApiData']");
    }

    get API_run() {
        return $("//input[@value='Test API Now!']");
    }

    get APRD_FlagProductsToESRB() {
        return $$("//a[contains(text(),'Flag products to ESB')]");
    }

    get APRD_FlagPricesToESRB() {
        return $$("//a[contains(text(),'Flag prices to ESB')]");
    }

    get APRD_ProductFeed() {
        return $$("//a[contains(text(),'ProductFeed')]");
    }

    get APRD_PriceFeed() {
        return $$("//a[contains(text(),'PriceFeed')]");
    }

    get APRD_inputPLUS() {
        return $("//input[@name='extra.option.plus']");
    }

    get APRD_inputSKU() {
        return $("//input[@name='extra.option.skus']");
    }

    get APRD_RunButton() {
        return $("#execFormRunButton");
    }

    get APRD_RunStatus() {
        return $("//span[contains(@class,'execstate execstatedisplay overall h4')]");
    }

    get holdLock() {
        return $$("img[alt='On hold']");
    }

    get resolveHolds() {
        return $("//a[contains(text(),'Resolve Holds')]");
    }

    get saveHoldButton() {
        return $("//span[contains(text(),'Save')]");
    }

    get returnToSummary() {
        return $$("//span[contains(text(),'Go to Order Summary')]");
    }

    get ReturnsTab() {
        return $("//span[contains(text(),'Returns')]");
    }

    get ExchangeOrderNumber() {
        return $("td[class='advancedTableLayout-valueCell twoColumnTableLayout-valueCell twoColumnTableLayout-valueCell-2'] > div > div:nth-child(3) > div:nth-child(2) > div > div > a");
    }

    get ExchangeItemList() {
        return $$("//td[4]//div[1]//div[1]//span[1]");
    }

    checkForStatus(include) {
        browser.pause(1000);
        let source = browser.getPageSource();
        let status = source.includes(include);
        while (status === false) {
            browser.pause(500);
            this.CloseOrder.click();
            this.OrderNumber.waitForEnabled();
            browser.pause(3000);
            this.OrderNumber.setValue(referenceNumber);
            this.FindOrderBTN.click();
            this.TableItem.waitForExist();
            browser.pause(1000);
            source = browser.getPageSource();
            status = source.includes(include);
        }
        Screenshot.viewport();
    }

    releaseOrder() {
        this.TableItem.waitForExist();
        browser.pause(3000);
        this.checkForStatus('Released');
    }

    applyOrderHold() {
        browser.pause(1000);
        this.applyHold.click();
        browser.pause(1000);
        browser.keys('\uE004');
        browser.keys("Cancellation Hold");
        browser.pause(3000);
        let nextBtn = this.saveHold[0];
        nextBtn.click();
        browser.pause(2000);
        global.appliedHolds = true;
    }

    retrieveOrder(inputOrder) {
        this.OrderNumber.waitForExist();
        browser.pause(2000);
        if (inputOrder !== undefined) {
            this.OrderNumber.setValue(inputOrder);
            this.FindOrderBTN.click();
            this.CloseOrder.waitForDisplayed();
        } else {
            this.OrderNumber.setValue(referenceNumber);
            this.FindOrderBTN.click();
            this.CloseOrder.waitForDisplayed();
            if ((OMSquantitiesRecorded === false)||(OMSquantitiesRecorded === undefined)) {
                let QuantitiesArray = this.QuantityValue;
                let counterTick = 0;
                while (counterTick !== skuslist.length) {
                    let Quantity = QuantitiesArray[counterTick].getHTML(false);
                    Quantity = Quantity.split(".");
                    Quantity = Quantity[0];
                    skuslist[counterTick].Quantity = Quantity;
                    counterTick = counterTick + 1;
                }
                global.OMSquantitiesRecorded = true;
            }
        }
        if (appliedHolds === false) {
            let holdlockNumber = objectLength.element(this.holdLock);
            let counter = 0;
            let resolvedHolds = false;
            while (counter < holdlockNumber) {
                resolvedHolds = this.holdLock[counter].isDisplayed();
                counter++;
                if (resolvedHolds === true) {
                    break;
                }
            }
            if (resolvedHolds === true) {
                this.resolveHolds.click();
                browser.pause(1000);
                browser.keys('\uE004');
                browser.pause(250);
                browser.keys('\uE004');
                browser.pause(250);
                browser.keys('\uE004');
                browser.pause(250);
                browser.keys('\uE004');
                browser.pause(250);
                browser.keys('\uE004');
                browser.pause(250);
                browser.keys('\uE00D');
                Screenshot.viewport();
                this.saveHoldButton.click();
                resolvedHolds = false;
                browser.pause(1000);
                this.returnToSummary[0].click();
            }
        }
        Screenshot.viewport();
    }

    cancelOrder() {
        browser.pause(1000);
        this.cancelOrderLink.click();
        browser.pause(1000);
        browser.keys("Customer cancellation");
        let nextBtn = this.cancelNext[1];
        nextBtn.click();
        browser.pause(1000);
        let okBtn = this.cancelOk[0];
        okBtn.click();
        browser.pause(3000);
        let confirmBtn = this.cancelConfirm[1];
        confirmBtn.click();
        this.TableItem.waitForExist();
        browser.pause(1000);
        this.checkForStatus('Cancelled');
    }

    scheduleOrder() {
        this.TableItem.waitForExist();
        browser.pause(1000);
        this.checkForStatus('Scheduled');
    }

    logIn() {
        Environment.openURL('https://sup-oms.qa.coc.ibmcloud.com/isccs/isccs/login.do?scFlag=Y');
        this.Username.setValue("admin");
        this.Password.setValue("password");
        browser.keys("Enter");
    }

    logOut() {
        this.CloseOrder.click();
        //this.UserMenu.moveToObject();
        this.UserMenu.click();
        this.LogoutBTN.click();
        browser.acceptAlert();
    }

    sterlingQueryForShipDetails() {
        Environment.openURL('https://sup-oms.qa.coc.ibmcloud.com/smcfs/yfshttpdbi/sterlingdbqueryclient.jsp');
        browser.pause(4000);
        this.OMS_SQL_username.setValue('admin');
        this.OMS_SQL_password.setValue('password');
        let SQLline = "select ol.prime_line_no, ol.item_id, or.release_no, or.shipnode_key, or.ship_advice_no from yfs_order_line ol join yfs_order_header oh on ol.order_header_key = oh.order_header_key join yfs_order_release or on ol.order_header_key = or.order_header_key where oh.order_no = '" + referenceNumber + "';";
        this.OMS_SQL_entry.setValue(SQLline);
        this.OMS_SQL_run.click();
        browser.pause(3000);
        Screenshot.viewport();
        let counterTick = 0;
        let stepCount = 0;
        let loopMax = skuslist.length;
        let resultsCount = objectLength.element(this.OMS_SQL_results);
        resultsCount = resultsCount / 5;
        if (loopMax !== resultsCount) {
            let duplicateTimes = resultsCount / loopMax - 1;
            let counter = 0;
            while (counter !== duplicateTimes) {
                let repeatCounter = 0;
                while (repeatCounter < loopMax) {
                    let SKUtemp = skuslist[repeatCounter].No;
                    let Quantitytemp = skuslist[repeatCounter].Quantity;
                    skuslist[skuslist.length] = new Product.skuObject(SKUtemp, Quantitytemp, "", "", "");
                    repeatCounter++;
                }
                counter++;
            }
        }
        let resultPosition = 0;
        while (counterTick !== resultsCount) {
            let PRIME_LINE_NO = this.OMS_SQL_results[stepCount].getHTML(false);
            stepCount = stepCount + 1;
            let ITEM_ID = this.OMS_SQL_results[stepCount].getHTML(false);
            stepCount = stepCount + 1;
            stepCount = stepCount + 1;
            let SHIPNODE_KEY = this.OMS_SQL_results[stepCount].getHTML(false);
            stepCount = stepCount + 1;
            let SHIP_ADVICE_NO = this.OMS_SQL_results[stepCount].getHTML(false);
            if (counterTick === loopMax) {
                resultPosition++;
            }
            if (counterTick === (loopMax * 2)) {
                resultPosition++;
            }
            skuslist.filter(x => {
                return x.No === ITEM_ID
            })[resultPosition].SHIPNODE_KEY = SHIPNODE_KEY;
            skuslist.filter(x => {
                return x.No === ITEM_ID
            })[resultPosition].PRIME_LINE_NO = PRIME_LINE_NO;
            skuslist.filter(x => {
                return x.No === ITEM_ID
            })[resultPosition].SHIP_ADVICE_NO = SHIP_ADVICE_NO;

            stepCount = stepCount + 1;
            counterTick = counterTick + 1;
        }
    }

    APITesterShipOrder(zeroShip) {
        let nl = (process.platform === "win32" ? "\r\n" : "\n");
        let d = new Date();
        let year = d.getFullYear();
        let month = ("0" + (d.getMonth() + 1)).slice(-2);
        let day = ("0" + d.getDate()).slice(-2);
        let counter = skuslist.length;
        let ticks = 0;
        let quantityVal = 0;
        let closeOrder = 'N';
        while (counter !== ticks) {
            browser.url('https://sup-oms.qa.coc.ibmcloud.com/smcfs/yfshttpapi/yantrahttpapitester.jsp');
            if (zeroShip === true) {
                quantityVal = 0;
                closeOrder = 'Y';
            } else {
                quantityVal = skuslist[ticks].Quantity;
            }
            let ShipmentLines = '<ShipmentLine ItemID="' + skuslist[ticks].No + '" PrimeLineNo="' + skuslist[ticks].PRIME_LINE_NO + '" SubLineNo="1" Quantity="' + quantityVal + '" ShipAdviceNo="' + skuslist[ticks].SHIP_ADVICE_NO + '">' + nl + '</ShipmentLine>';
            let APIMessage = '<ShippingAdvice Closed="' + closeOrder + '" ShipAdviceNo="' + skuslist[ticks].SHIP_ADVICE_NO + '">' + nl + ' <Shipment ConfirmShip="Y" ActualShipmentDate="' + year + '-' + month + '-' + day + '" ActualCarrierServiceCode="DOMSTD" DocumentType="0001" EnterpriseCode="SUPERDRY" ShipNode="' + skuslist[ticks].SHIPNODE_KEY + '" TrackingNo="' + d.getTime() + '">' + nl + '  <ShipmentLines>' + nl + ShipmentLines + nl + '</ShipmentLines>' + nl + '</Shipment>' + nl + '</ShippingAdvice>';
            browser.pause(3000);
            this.API_InvokeFlow.click();
            this.API_ServiceName.setValue('SG_Process_Shipment_Notification');
            this.API_ApiName.selectByAttribute('value', 'acceptOrderLineReservation');
            this.API_userId.setValue('admin');
            this.API_password.setValue('password');
            this.API_Message.setValue(APIMessage);
            Screenshot.viewport();
            this.API_run.click();
            browser.pause(3000);
            Screenshot.viewport();
            ticks = ticks + 1;
        }
    }

    getReturnsDetails() {
        this.retrieveOrder();
        Screenshot.viewport();
        this.ReturnsTab.click();
        browser.pause(1500);
        let exchangeOrderNumbercurrent = this.ExchangeOrderNumber.getHTML(false);
        Screenshot.viewport();
        this.CloseOrder.click();
        Screenshot.viewport();
        browser.pause(500);
        this.retrieveOrder(exchangeOrderNumbercurrent);
        Screenshot.viewport();
        referenceNumber = exchangeOrderNumbercurrent;
        browser.pause(2000);
        skuslist = [];
        let listLength = objectLength.element(this.ExchangeItemList);
        let skuArray = this.ExchangeItemList;
        let counterTick = 0;
        while (counterTick < listLength) {
            let SKUtemp = skuArray[counterTick].getHTML(false);
            SKUtemp = SKUtemp.split("(");
            SKUtemp = SKUtemp[1].slice(0, -2);
            skuslist[skuslist.length] = new Product.skuObject(SKUtemp, "", "", "", "");
            counterTick = counterTick + 1;
        }
        let QuantitiesArray = this.QuantityValue;
        counterTick = 0;
        while (counterTick !== skuslist.length) {
            let Quantity = QuantitiesArray[counterTick].getHTML(false);
            Quantity = Quantity.split(".");
            Quantity = Quantity[0];
            skuslist[counterTick].Quantity = Quantity;
            counterTick = counterTick + 1;
        }
        this.CloseOrder.click();
        browser.pause(500);
        this.retrieveOrder(exchangeOrderNumbercurrent);
    }
}

export default new OMS();
