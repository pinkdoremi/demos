var fs = require('fs');
var path = require('path');
var dir = process.cwd();
var http = require('http');
var cmd = require('child_process');
var originDir = dir + '\\img\\imageTest\\source';
var outputDir = dir + '\\img\\imageTest\\output';
var originImages = fs.readdirSync(originDir);
var result = {
	images:[]
};
console.log('openning the Server...')
var server = new http.Server();
server.listen(8008,'10.1.201.36');
console.log('server port:8008');
console.log('start to encode images....')
cmd.exec('sh encodeToWebp.sh',
	{
		shell:'sh.exe',
		cwd:'./img/imageTest'
	},
	function(error, stdout, stderr){
		console.log('[OK!] finish encoding')
	originImages.forEach(function (filename) {
		var imgpath = '/img/imageTest/source/'+filename;
		var fullPath = path.join(originDir,filename);
		var OriginSize = converSize(fs.statSync(fullPath).size);
		var filenameWithoutSuffix = /^[^\.]*/.exec(filename)[0];
		var format = /[^\.]*$/.exec(filename)[0].toUpperCase();
		result.images.push({
			filename:filenameWithoutSuffix,
			size:OriginSize,
			quality:'原图',
			format:format,
			path:imgpath,
			encodeImgs:[]
		})
	});

	fs.readdirSync(outputDir).forEach(function (filename) {
		var imgpath = '/img/imageTest/output/'+filename;
		var fullPath = path.join(outputDir,filename);
		var thisSize = converSize(fs.statSync(fullPath).size);
		var quality = /([0-9]|[1-9][0-9]|100)Q|lossless/.exec(filename)[0];
		var originFileName = /^[^\.]*/.exec(filename)[0].replace(quality,'');
		var format = /[^\.]*$/.exec(filename)[0].toUpperCase();
		if(quality == 'lossless'){
			quality = '无损压缩';
		}else{
			quality = '有损'+quality.replace('Q','质量');
		}
		result.images.forEach(function(origin,index){
			if(originFileName == origin.filename){
				result.images[index].encodeImgs.push({
					filename:origin.filename,
					size:thisSize,
					quality:quality,
					path:imgpath,
					format:format
				});
			}
		});
	})
});
server.on('request',function(request,response){
	var url = require('url').parse(request.url);
	if(url.pathname === '/images'){
		response.writeHead(200,{
			"Content-Type":"text/plain; charset=utf-8",
			"Access-Control-Allow-Origin":"*"
		});
		response.write(JSON.stringify(result));
		response.end();
	}
})
function converSize(size){
	return (size/1000).toFixed(2)+'KB';
}