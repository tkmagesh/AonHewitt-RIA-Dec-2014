var 
	http = require('http'),
	fs = require('fs'),
	url = require('url'),
	qs = require('querystring'),
	path = require('path');

var staticFileExtensions = [ ".html", ".txt", ".css", ".js", ".ico", ".jpg", ".json"];

function isStaticResource(resourcePath){
	return staticFileExtensions.indexOf(path.extname(resourcePath)) !== -1;
}

var server = http.createServer(function(req,res){
	req.url = url.parse((req.url === "/" ? "/index.html" : req.url), true);
	if (isStaticResource(req.url.pathname)){
		var resourcePath = path.join(__dirname, req.url.pathname);
		if (fs.existsSync(resourcePath)){
			fs.createReadStream(resourcePath, {encoding : "utf8"}).pipe(res);
		} else {
			res.statusCode = 404;
			res.end();
		}
	} else {
		res.statusCode = 404;
		res.end();
	}
});
server.listen(8080);
console.log("Server listening on port 8080..");