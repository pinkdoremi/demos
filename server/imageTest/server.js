var http = require('http');
var fs = require('fs');
var server = new http.Server();
server.listen(8008);
server.on('request',function(request,response){
	data = 
	var url = require('url').parse(request.url);
	if(url.pathname === 'images'){
		response.writeHead(200,{
			"Content-Type":"text/plain; charset=utf-8"
		});
		response.write(data);
		response.end();
	}
})