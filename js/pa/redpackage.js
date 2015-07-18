var page = require('webpage').create(),
    system = require('system'),
    code = encodeURIComponent(system.args[1] || ''),
    url = 'http://172.16.2.110:88/';
page.onResourceRequested = function(requestData, networkRequest) {
    networkRequest.setHeader('User-Agent',
        'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.134 Safari/537.36'
    );
};
page.onResourceReceived = function (response) {
    page.evaluate(function(){
        console.log(document.getElementsByName('txtResult')[0].value());
    })
};
page.open(url, function(status) {
    if(status !== 'success') {
        return;
    }
        console.log('ok' + page.evaluate(
            bindRed));
});

function bindRed(memberId) {
    var apiUrl = document.getElementsByName('txtPostURL')[0];
    apiUrl.value = 'http://tcmobileapi.17usoft.com/hongbao/MyRedPackageHandler.ashx';
    var jsonContent = document.getElementsByName('txtPostXML')[0];
    var json = {
              "request" : {
                "body" : {
                  "clientInfo" : {
                    "extend" : "2^com.tongcheng.iphoneEnterprise,4^8.3,5^iPhone7_1",
                    "deviceId" : "8aef67d7b0065b92a54d2f693c5fc34a8ac0607e",
                    "networkType" : "wifi",
                    "refId" : "26903811",
                    "tag" : "|v1002v1v二维码v|",
                    "pushInfo" : "151e3b6e49f743f7bd28bac2ae3a69a79f9ee26c58f5a8947d51b4a7adc53cd9",
                    "versionType" : "iPhone",
                    "clientIp" : "10.6.0.202",
                    "versionNumber" : "7.4.2"
                  },
                  "batchNo" : "1507130095",
                  "memberId" : memberId || "86b7070a5a6f4f3ec736f3bb98b92b65"
                },
                "header" : {
                  "accountID" : "5ee7b429-b8c6-400f-8b87-3c384c4ea68a",
                  "encryptEffort" : "0",
                  "serviceName" : "GenerateBindRedPackage",
                  "reqTime" : "1437029549336",
                  "digitalSign" : "32bfa87ae0f84582fa3eac7833e3de3a",
                  "version" : "20110303090115"
                }
              }
          };
              jsonContent.value = JSON.stringify(json);
    var submitButton = document.getElementsByName('btnSubmitV3')[0];
    submitButton.click();
    return true;
}
