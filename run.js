var cmd = require('child_process');
cmd.exec('node server.js',
	function(error, stdout, stderr){
		console.log(error, stdout, stderr)
});
cmd.exec('sh watching.sh',
	function(error, stdout, stderr){
		console.log(error, stdout, stderr)
});
cmd.exec('sh webServer.sh',
	function(error, stdout, stderr){
		console.log(error, stdout, stderr)
});