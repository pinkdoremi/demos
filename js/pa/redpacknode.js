var http = require('http');
var fs = require('fs');
var members = ['1','2','3'];
var fileName = +new Date();
var list = {
    'success':[],
    '3001':[],
    'else':[],
    'reqFail':[]
}
function bindRed(memberId){
    var postData = JSON.stringify({
        'servicename': 'GenerateBindRedPackage',
        'requrl': 'http://tcmobileapi.17usoft.com/hongbao/MyRedPackageHandler.ashx',
        'reqbody': '"batchNo":"1507130095","memberId":"'+(memberId||'86b7070a5a6f4f3ec736f3bb98b92b65')+'"',
        'iscache': '1',
        'tagname': '224'
    });

    var options = {
      hostname: '61.155.159.99',
      port: 8010,
      path: '/youlun/api/apitesthandler.ashx',
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': postData.length
      }
    };
    var req = http.request(options, function(res) {
      console.log('STATUS: ' + res.statusCode);
      res.setEncoding('utf8');
      res.on('data', function (chunk) {
        chunk = JSON.parse(chunk);
        if(chunk.response.header.rspCode === '3001'){
            console.log('会员'+memberId+'已经领取过');
            list['success'].push(memberId);
        }else if (chunk.response.header.rspCode === '0000'){
            console.log('会员'+memberId+'领取成功');
            list['3001'].push(memberId);
        }else{
            console.log('会员'+memberId+'领取失败，状态码：'+chunk.response.header.rspCode);
            list['else'].push(memberId);
        }
        fs.writeFile(fileName+'.txt', JSON.stringify(list), function (err) {
          if (err) throw err;
        });
      });
    });

    req.on('error', function(e) {
        console.log('会员'+memberId+'请求失败，状态信息'+e.message);
        list['reqFail'].push(memberId);
        fs.writeFile(fileName+'.txt', JSON.stringify(list), function (err) {
          if (err) throw err;
        });
    });

    // write data to request body
    req.write(postData);
    req.end();
}
members.forEach(function(memberId){
    bindRed(memberId);
});
