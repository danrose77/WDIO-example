import Page from '../Pages/Page'
import Screenshot from "./Screenshot";

const mkdirSync = function (dirPath) {
    try {
        fs.mkdirSync(dirPath)
    } catch (err) {
        if (err.code !== 'EEXIST') throw err
    }
};

class write extends Page {
    toTextFile(text, file) {
        let nl = (process.platform === "win32" ? "\r\n" : "\n");
        let screendate = new Date();
        let month = screendate.getMonth();
        month = month + 1;
        let fileName = "./reports/" + screendate.getFullYear() + "_" + month + "_" + screendate.getDate() + "/test_run_logging_" + screendate.getDate() + "_" + month + "_" + screendate.getFullYear() + ".txt";
        if (file !== undefined) {
            fileName = "./reports/" + screendate.getFullYear() + "_" + month + "_" + screendate.getDate() + "/" + file + "_" + screendate.getDate() + "_" + month + "_" + screendate.getFullYear() + ".txt";
        }
        let hour = screendate.getHours();
        hour = "0" + hour;
        hour = hour.slice(-2);
        let minute = screendate.getMinutes();
        minute = "0" + minute;
        minute = minute.slice(-2);

        let currentURL = browser.getUrl();
        let urlArray = currentURL.split("/");
        let shortURL = "";
        let siteSuffix = this.returnSuffix();
        let sitePrefix = this.returnPrefix();

        switch (sitePrefix) {
            case 'be':
            case 'ca':
            case 'ch':
            case 'hk':
                shortURL = urlArray[0] + "//" + urlArray[2] + "/" + urlArray[3];
                break;
            case 'co':
                if (siteSuffix === "us") {
                    shortURL = urlArray[0] + "//" + urlArray[2] + "/" + urlArray[3];
                } else {
                    shortURL = urlArray[0] + "//" + urlArray[2];
                }
                break;
            default:
                shortURL = urlArray[0] + "//" + urlArray[2];
        }
        let fd = fs.openSync(fileName, 'a');
        if (shortURL !== 'https://sup-oms.qa.coc.ibmcloud.com') {
            fs.writeSync(fd, hour + ":" + minute + " - " + specname + " - " + text + " - URL: " + shortURL + nl);
        } else {
            fs.writeSync(fd, hour + ":" + minute + " - " + specname + " - " + text + nl);
        }

        fs.closeSync(fd);
    }
    toPerformanceLog(text) {
        let nl = (process.platform === "win32" ? "\r\n" : "\n");
        let screendate = new Date();
        let month = screendate.getMonth();
        month = month + 1;
        let fileName = "./reports/" + screendate.getFullYear() + "_" + month + "_" + screendate.getDate() + "/performance_logging_" + screendate.getDate() + "_" + month + "_" + screendate.getFullYear() + ".csv";
        let fd = fs.openSync(fileName, 'a');
        fs.writeSync(fd, text + nl);
        fs.closeSync(fd);
    }

    timestamp(text) {
        let screendate = new Date();
        let hour = screendate.getHours();
        hour = "0" + hour;
        hour = hour.slice(-2);
        let minute = screendate.getMinutes();
        minute = "0" + minute;
        minute = minute.slice(-2);
        let second = screendate.getSeconds();
        second = "0" + second;
        second = second.slice(-2);
        if (text === undefined) {
            text = ""
        } else {
            text = " - " + text;
        }
        console.log(hour + ":" + minute + ":" + second + text);
        Screenshot.viewport();
    }
    xmlOrderFiles(channel) {
        let nl = (process.platform === "win32" ? "\r\n" : "\n");
        let screendate = new Date();
        let month = screendate.getMonth();
        month = month + 1;

        let customerContactLine = xmloutput.split("&lt;")[8];
        customerContactLine = customerContactLine.split('&gt;')[0];
        let orderLine11 = xmloutput.split("&lt;")[11];
        orderLine11 = orderLine11.split("&gt;")[0];
        orderLine11 = orderLine11.split("=");
        let CustomerEMailID = orderLine11[1].split(" ")[0];
        let DepartmentCode = orderLine11[2].split(" ")[0];
        let OrderDate = orderLine11[3].split(" ")[0];
        let OrderNo = channel + screendate.getTime();
        let OrderType = "Anatwine";
        let SellerOrganizationCode = orderLine11[6].split(" ")[0];
        let orderLine12 = xmloutput.split("&lt;")[12];
        orderLine12 = orderLine12.split("&gt;")[0];
        let orderLines = xmloutput.split("&lt;OrderLines&gt;")[1];
        orderLines = orderLines.split('&lt;/OrderLines&gt;')[0];
        orderLines = orderLines.split("&lt;");
        let PersonInfoShipTo = xmloutput.split("PersonInfoShipTo")[1];
        PersonInfoShipTo = PersonInfoShipTo.split('&gt;')[0];
        let PersonInfoBillTo = xmloutput.split("PersonInfoBillTo")[1];
        PersonInfoBillTo = PersonInfoBillTo.split('&gt;')[0];
        let PriceInfo = xmloutput.split("PriceInfo")[1];
        PriceInfo = PriceInfo.split('&gt;')[0];
        let PaymentDetails = xmloutput.split("PaymentDetails")[2];
        PaymentDetails = PaymentDetails.split('&gt;')[0];
        PaymentDetails = PaymentDetails.split(" ");
        let ChargeType = '"CHARGE"';
        let RequestAmount = PaymentDetails[3].split("=")[1];

        mkdirSync("./reports/orderXML/" + screendate.getFullYear() + month + screendate.getDate() + "/");
        let fileName = "./reports/orderXML/" + screendate.getFullYear() + month + screendate.getDate() + "/" + channel + referenceNumber + ".xml";
        console.log(fileName);
        let fd = fs.openSync(fileName, 'a');
        fs.writeSync(fd, '<?xml version="1.0" encoding="UTF-8"?>' + nl);
        fs.writeSync(fd, '<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ns1="http://superdry-whitelabel/api/OrderExport/">' + nl);
        fs.writeSync(fd, '<SOAP-ENV:Body>' + nl);
        fs.writeSync(fd, '<ns1:exportOrders>' + nl);
        fs.writeSync(fd, '<exportOrdersRequest>' + nl);
        fs.writeSync(fd, '<CustomerOrder>' + nl);
        fs.writeSync(fd, '<Customer>' + nl);
        fs.writeSync(fd, '<CustomerContactList>' + nl);
        fs.writeSync(fd, '<' + customerContactLine + '>' + nl);
        fs.writeSync(fd, '</CustomerContactList>' + nl);
        fs.writeSync(fd, '</Customer>' + nl);
        fs.writeSync(fd, '<Order CustomerEMailID=' + CustomerEMailID + ' DepartmentCode=' + DepartmentCode + ' OrderDate='+OrderDate+' OrderNo="'+OrderNo+'" OrderType="'+OrderType+'" SellerOrganizationCode='+SellerOrganizationCode+'>' + nl);
        fs.writeSync(fd, '<' + orderLine12 + '>' + nl);
        fs.writeSync(fd, '<OrderLines>' + nl);
        let orderLinesLength = orderLines.length;
        let counter = 1;
        while (counter !== orderLinesLength) {
            let lineTemp = orderLines[counter].slice(0,-4);
            fs.writeSync(fd, '<' + lineTemp + '>' + nl);
            counter++
        }
        fs.writeSync(fd, '</OrderLines>' + nl);
        fs.writeSync(fd, '<PersonInfoShipTo' + PersonInfoShipTo + '>' + nl);
        fs.writeSync(fd, '<PersonInfoBillTo' + PersonInfoBillTo + '>' + nl);
        fs.writeSync(fd, '<PriceInfo' + PriceInfo + '>' + nl);
        fs.writeSync(fd, '<PaymentMethods>' + nl);
        fs.writeSync(fd, '<PaymentMethod CreditCardNo="" CreditCardExpiryDate="" PaymentReference1="OFFLINE" PaymentReference2="'+OrderNo+'" PaymentReference3="" PaymentType="OFFLINE">' + nl);
        fs.writeSync(fd, '<PaymentDetailsList>' + nl);
        fs.writeSync(fd, '<PaymentDetails AuthorizationID="OFFLINE" ChargeType='+ChargeType+' RequestAmount='+RequestAmount+'>' + nl);
        fs.writeSync(fd, '</PaymentDetailsList>' + nl);
        fs.writeSync(fd, '</PaymentMethod>' + nl);
        fs.writeSync(fd, '</PaymentMethods>' + nl);
        fs.writeSync(fd, '</Order>' + nl);
        fs.writeSync(fd, '</CustomerOrder>' + nl);
        fs.writeSync(fd, '</exportOrdersRequest>' + nl);
        fs.writeSync(fd, '</ns1:exportOrders>' + nl);
        fs.writeSync(fd, '</SOAP-ENV:Body>' + nl);
        fs.writeSync(fd, '</SOAP-ENV:Envelope>' + nl);
        fs.closeSync(fd);
    }
    jsonOrderFiles(channel) {
        let nl = (process.platform === "win32" ? "\r\n" : "\n");
        let screendate = new Date();
        let month = screendate.getMonth();
        month = month + 1;

        let customerContactLine = xmloutput.split("&lt;")[8];
        customerContactLine = customerContactLine.split('&gt;')[0];
        let orderLine11 = xmloutput.split("&lt;")[11];
        orderLine11 = orderLine11.split("&gt;")[0];
        orderLine11 = orderLine11.split("=");
        let CustomerEMailID = orderLine11[1].split(" ")[0];
        let DepartmentCode = orderLine11[2].split(" ")[0];
        let OrderDate = orderLine11[3].split(" ")[0];
        let uniqueNo = screendate.getTime().toString();
        let OrderNo = channel + uniqueNo.slice(-8);
        let OrderType = "Anatwine";
        let SellerOrganizationCode = orderLine11[6].split(" ")[0];
        let orderLine12 = xmloutput.split("&lt;")[12];
        orderLine12 = orderLine12.split("&gt;")[0];
        let orderLines = xmloutput.split("&lt;OrderLines&gt;")[1];
        orderLines = orderLines.split('&lt;/OrderLines&gt;')[0];
        orderLines = orderLines.split("&lt;");
        let PersonInfoShipTo = xmloutput.split("PersonInfoShipTo")[1];
        PersonInfoShipTo = PersonInfoShipTo.split('&gt;')[0];
        let PersonInfoBillTo = xmloutput.split("PersonInfoBillTo")[1];
        PersonInfoBillTo = PersonInfoBillTo.split('&gt;')[0];
        let PriceInfo = xmloutput.split("PriceInfo")[1];
        PriceInfo = PriceInfo.split('&gt;')[0];
        let PaymentDetails = xmloutput.split("PaymentDetails")[2];
        PaymentDetails = PaymentDetails.split('&gt;')[0];
        PaymentDetails = PaymentDetails.split(" ");
        let ChargeType = '"CHARGE"';
        let RequestAmount = PaymentDetails[3].split("=")[1];

        mkdirSync("./reports/orderJSON/" + screendate.getFullYear() + month + screendate.getDate() + "/");
        let fileName = "./reports/orderJSON/" + screendate.getFullYear() + month + screendate.getDate() + "/" + channel + referenceNumber + ".json";
        let fd = fs.openSync(fileName, 'a');
        fs.writeSync(fd, '{' + nl);
        fs.writeSync(fd, '"info": {' + nl);
        fs.writeSync(fd, '"_postman_id": "00ca2e38-3f8a-4626-96f5-af730092bbfc",' + nl);
        fs.writeSync(fd, '"name": "OMS",' + nl);
        fs.writeSync(fd, '"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"' + nl);
        fs.writeSync(fd, '},' + nl);
        fs.writeSync(fd, '"item": [' + nl);
        fs.writeSync(fd, '{' + nl);
        fs.writeSync(fd, '"name": "API",' + nl);
        fs.writeSync(fd, '"item": [' + nl);
        fs.writeSync(fd, '{' + nl);
        fs.writeSync(fd, '"name": "QA FE02 XML",' + nl);
        fs.writeSync(fd, '"request": {' + nl);
        fs.writeSync(fd, '"auth": {' + nl);
        fs.writeSync(fd, '"type": "basic",' + nl);
        fs.writeSync(fd, '"basic": [' + nl);
        fs.writeSync(fd, '{' + nl);
        fs.writeSync(fd, '"key": "password",' + nl);
        fs.writeSync(fd, '"value": "supergroup",' + nl);
        fs.writeSync(fd, '"type": "string"' + nl);
        fs.writeSync(fd, '},' + nl);
        fs.writeSync(fd, '{' + nl);
        fs.writeSync(fd, '"key": "username",' + nl);
        fs.writeSync(fd, '"value": "supergroup",' + nl);
        fs.writeSync(fd, '"type": "string"' + nl);
        fs.writeSync(fd, '},' + nl);
        fs.writeSync(fd, '{' + nl);
        fs.writeSync(fd, '"key": "saveHelperData",' + nl);
        fs.writeSync(fd, '"value": true,' + nl);
        fs.writeSync(fd, '"type": "boolean"' + nl);
        fs.writeSync(fd, '},' + nl);
        fs.writeSync(fd, '{' + nl);
        fs.writeSync(fd, '"key": "showPassword",' + nl);
        fs.writeSync(fd, '"value": false,' + nl);
        fs.writeSync(fd, '"type": "boolean"' + nl);
        fs.writeSync(fd, '}' + nl);
        fs.writeSync(fd, ']' + nl);
        fs.writeSync(fd, '},' + nl);
        fs.writeSync(fd, '"method": "POST",' + nl);
        fs.writeSync(fd, '"header": [' + nl);
        fs.writeSync(fd, '{' + nl);
        fs.writeSync(fd, '"key": "Content-Type",' + nl);
        fs.writeSync(fd, '"name": "Content-Type",' + nl);
        fs.writeSync(fd, '"value": "application/xml",' + nl);
        fs.writeSync(fd, '"type": "text"' + nl);
        fs.writeSync(fd, '}' + nl);
        fs.writeSync(fd, '],' + nl);
        fs.writeSync(fd, '"body": {' + nl);
        fs.writeSync(fd, '"mode": "raw",' + nl);
        fs.writeSync(fd, '"raw": ');
        let bodyString = '<?xml version="1.0" encoding="UTF-8"?><SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ns1="http://superdry-whitelabel/api/OrderExport/"><SOAP-ENV:Body><ns1:exportOrders><exportOrdersRequest><CustomerOrder><Customer><CustomerContactList><' + customerContactLine + '></CustomerContactList></Customer><Order CustomerEMailID=' + CustomerEMailID + ' DepartmentCode=' + DepartmentCode + ' OrderDate='+OrderDate+' OrderNo="'+OrderNo+'" OrderType="'+OrderType+'" SellerOrganizationCode='+SellerOrganizationCode+'><' + orderLine12 + '><OrderLines>';
        let orderLinesLength = orderLines.length;
        let counter = 1;
        while (counter !== orderLinesLength) {
            let lineTemp = orderLines[counter].slice(0,-4);
            bodyString = bodyString + '<' + lineTemp + '>';
            counter++
        }
        bodyString = bodyString + '</OrderLines><PersonInfoShipTo' + PersonInfoShipTo + '><PersonInfoBillTo' + PersonInfoBillTo + '><PriceInfo' + PriceInfo + '><PaymentMethods><PaymentMethod CreditCardNo="" CreditCardExpiryDate="" PaymentReference1="OFFLINE" PaymentReference2="'+OrderNo+'" PaymentReference3="" PaymentType="OFFLINE"><PaymentDetailsList><PaymentDetails AuthorizationID="OFFLINE" ChargeType='+ChargeType+' RequestAmount='+RequestAmount+'></PaymentDetailsList></PaymentMethod></PaymentMethods></Order></CustomerOrder></exportOrdersRequest></ns1:exportOrders></SOAP-ENV:Body></SOAP-ENV:Envelope>';
        bodyString = bodyString.replace(/"/g, '\\"');
        console.log(bodyString);
        fs.writeSync(fd, '"' + bodyString + '"' + nl);
        fs.writeSync(fd, '},' + nl);
        fs.writeSync(fd, '"url": {' + nl);
        fs.writeSync(fd, '"raw": "https://qa-supergroup-esb-ecom-order-feed.eu.cloudhub.io/ecom-orders/",' + nl);
        fs.writeSync(fd, '"protocol": "https",' + nl);
        fs.writeSync(fd, '"host": [' + nl);
        fs.writeSync(fd, '"qa-supergroup-esb-ecom-order-feed",' + nl);
        fs.writeSync(fd, '"eu",' + nl);
        fs.writeSync(fd, '"cloudhub",' + nl);
        fs.writeSync(fd, '"io"' + nl);
        fs.writeSync(fd, '],' + nl);
        fs.writeSync(fd, '"path": [' + nl);
        fs.writeSync(fd, '"ecom-orders",' + nl);
        fs.writeSync(fd, '""' + nl);
        fs.writeSync(fd, ']' + nl);
        fs.writeSync(fd, '}' + nl);
        fs.writeSync(fd, '},' + nl);
        fs.writeSync(fd, '"response": []' + nl);
        fs.writeSync(fd, '}' + nl);
        fs.writeSync(fd, ']' + nl);
        fs.writeSync(fd, '}' + nl);
        fs.writeSync(fd, ']' + nl);
        fs.writeSync(fd, '}' + nl);
        fs.closeSync(fd);
    }
}

export default new write();
