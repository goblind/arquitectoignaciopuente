var express = require('express');

var app = module.exports = express();

//route
app.set('views', __dirname);
app.set('view engine', 'jade');

app.get('/estudio', function(req, res){
	res.render('estudio');
});