var page = require('webpage').create(),
    system = require('system'),
    code = encodeURIComponent(system.args[1] || ''),
    url = 'http://xueqiu.com/S/' + (code || 'SH000001');
page.onResourceRequested = function(requestData, networkRequest) {
    networkRequest.setHeader('User-Agent',
        'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.130 Safari/537.36'
    );
};
page.open(url, function(status) {
    if(status !== 'success') {
        return;
    }
    console.log('NowPrice is:' + page.evaluate(getLatestPrice));
    setInterval(function() {
        console.log('NowPrice is:' + page.evaluate(
            getLatestPrice));
    }, 3000)
});

function getLatestPrice() {
    var res = '';
    var doms = document.querySelectorAll('.currentInfo .stockDown');
    [].forEach.call(doms, function(item) {
        res += '\t' + item.textContent;
    });
    res = res.replace(/[^0-9.+\-%\s\(\)]/g, '');
    return res;
}
