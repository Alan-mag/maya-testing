var express = require('express');
var app = express(); 
var mongojs = require('mongojs');
//var db = mongojs('RedAppDB', ['RedAppDB']);
//var db2 = mongojs('RedAppDB', ['secondCollection']);
// var db3 = mongojs('mongodb://heroku_app35370466:m7r9499djbhj244hs38ujptc0s@ds059471.mongolab.com:59471/heroku_app35370466', ['taskone']);
//mongodb://kiko:tito@ds059471.mongolab.com:59471/heroku_app35370466
var bodyParser = require('body-parser');

var port = Number(process.env.PORT || 54545, '127.0.0.1');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());


app.listen(port);
console.log("server running on port 54545.");