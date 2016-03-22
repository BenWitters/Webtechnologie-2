var express = require('express'),
	path = require('path'),
	app = express();

app.use(function (req, res, next) {
	if (path.extname(req.path).length > 0) {
		next();
	} else {
		req.url = '/index.html';
		next();
	}
});

app.use(express.static(__dirname + '/development'));

app.listen(process.env.PORT || 8001);