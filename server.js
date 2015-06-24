var fs = require('fs');
var path = require('path');
var dir = process.cwd();
var cmd = require('child_process');
dir = dir + '\\img\\imageTest\\source';
var originImages = fs.readdirSync(dir);
originImages.forEach(function (filename) {
	var fullPath = path.join(dir,filename);
	var size = fs.statSync(fullPath).size;
	cmd.exec('sh \\img\\imageTest\\encodeToWebp',
		function(error, stdout, stderr){
			console.log('finish');
	})
})