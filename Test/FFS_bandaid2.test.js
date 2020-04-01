// grunt local --spec=FFS_bandaid.test

// Add orders as a comma separated list
let orderNumbers = ["SUPERDRY_12899546"];

describe('Should take order numbers and run associated XML in api tester', () => {
    it( 'should iterate through order numbers and bandaid them', () => {
        for(const element of orderNumbers) {
            try {
                    // Get info from sterling querry client
                browser.url('https://cc.supergroupoms.com/smcfs/yfshttpdbi/sterlingdbqueryclient.jsp');
                browser.pause(2000);

                const OMS_SQL_username = $("//input[@name='YFSEnvironment.userId']");
                const OMS_SQL_password = $("//input[@name='YFSEnvironment.password']");
                const OMS_SQL_entry = $("//textarea[@id='SQLStatement']");
                const OMS_SQL_run = $("[colspan] > [type] span");

                OMS_SQL_username.setValue('Daniel.Rose');
                OMS_SQL_password.setValue('518574Super*');
                let SQLline = "select YOR.shipnode_key,YS.shipment_no,YOH.order_no,YSC.container_no from yfs_order_header YOH join yfs_shipment_line YSL on YOH.order_no = YSL.order_no join yfs_shipment_container YSC on YSC.shipment_key = YSL.shipment_key join yfs_order_release YOR on YOR.order_header_key = YOH.order_header_key join yfs_shipment YS on YSL.shipment_key = YS.shipment_key where YOH.order_no = '" + element + "';";
                OMS_SQL_entry.setValue(SQLline);
                browser.pause(1000);
                OMS_SQL_run.click();

                const SHIPNODE_KEY_Cell = $("tr:nth-of-type(2) > td:nth-of-type(2)");
                const SHIPMENT_NO_Cell = $("tr:nth-of-type(2) > td:nth-of-type(3)");
                const CONTAINER_NO_Cell = $("tr:nth-of-type(2) > td:nth-of-type(5)");
                SHIPNODE_KEY_Cell.waitForDisplayed(10000);
                const SHIPNODE_KEY = SHIPNODE_KEY_Cell.getText();
                const SHIPMENT_NO = SHIPMENT_NO_Cell.getText();
                const CONTAINER_NO = CONTAINER_NO_Cell.getText();

                        // Submit API tester with valid xml
                browser.url("https://cc.supergroupoms.com/smcfs/yfshttpapi/yantrahttpapitester.jsp");
                let nl = (process.platform === "win32" ? "\r\n" : "\n");
                let APIMessage = '<MultiApi>' + nl + '<API Name="unpackShipment">' + nl + '<Input>' + nl + '<Shipment SellerOrganizationCode="SG02" ShipNode="'+SHIPNODE_KEY+'" ShipmentNo="'+SHIPMENT_NO+'" ShipmentKey="" OverrideModificationRules="Y">' + nl + '<Containers>' + nl + '<Container ShipmentContainerKey="" ContainerNo="'+CONTAINER_NO+'"/>' + nl + '</Containers>' + nl + '</Shipment>' + nl + '</Input>' + nl + '</API>' + nl + '<API Name="changeShipment">' + nl + '<Input>' + nl + '<Shipment Action="Modify" DocumentType="0001" EnterpriseCode="SUPERDRY" SellerOrganizationCode="SG02" ShipNode="'+SHIPNODE_KEY+'" ShipmentNo="'+SHIPMENT_NO+'" IsPackProcessComplete="N" ShipmentPackComplete="N" OverrideModificationRules="Y">' + nl + '</Shipment>' + nl + '</Input>' + nl + '</API>' + nl + '<API Name="changeShipmentStatus">' + nl + '<Input>' + nl + '<Shipment DocumentType="0001" EnterpriseCode="SUPERDRY" SellerOrganizationCode="SG02" ShipNode="'+SHIPNODE_KEY+'" ShipmentNo="'+SHIPMENT_NO+'" BaseDropStatus="1100.70.06.70" TransactionId="UNDO_PACK_SHMT_COMPLETE" />' + nl + '</Input>' + nl + '</API>' + nl + '<API Name="changeShipment">' + nl + '<Input>' + nl + '<Shipment Action="Cancel" DocumentType="0001" EnterpriseCode="SUPERDRY" SellerOrganizationCode="SG02" ShipNode="'+SHIPNODE_KEY+'" ShipmentNo="'+SHIPMENT_NO+'" CancelShipmentOnZeroTotalQuantity="Y" OverrideModificationRules="Y">' + nl + '<Notes>' + nl + '<Note ReasonCode="Invalid Postcode" NoteText="Postcode cannot be fulfilled" />' + nl + '</Notes>' + nl + '</Shipment>' + nl + '</Input>' + nl + '</API>' + nl + '<API Name="changeOrder">' + nl + '<Input>' + nl + '<Order DocumentType="0001" EnterpriseCode="SUPERDRY" OrderNo="'+element+'" Override="Y">' + nl + '<OrderLines>' + nl + '<OrderLine PrimeLineNo="1" SubLineNo="1" OrderedQty="0" >' + nl + '<Notes>' + nl + '<Note ReasonCode="Invalid Postcode" NoteText="Postcode cannot be fulfilled" />' + nl + '</Notes>' + nl + '</OrderLine>' + nl + '</OrderLines>' + nl + '</Order>' + nl + '</Input>' + nl + '</API>' + nl + '</MultiApi>';
                browser.pause(2000);
                const API_ApiName = $("//select[@id='ApiName']");
                const API_userId = $("//table[@cellpadding='7']//input[@name='YFSEnvironment.userId']");
                const API_password = $("//table[@cellpadding='7']//input[@name='YFSEnvironment.password']");
                const API_Message = $("//textarea[@id='InteropApiData']");
                const API_run = $("//input[@value='Test API Now!']");

                API_ApiName.selectByAttribute('value', 'multiApi');
                API_userId.setValue('Daniel.Rose');
                API_password.setValue('518574Super*');
                API_Message.setValue(APIMessage);
                API_run.click();
                browser.pause(1000);
            } catch (e) {
                console.warn("Couldn't bandaid for: " + element)
            }
        }
    });
});
