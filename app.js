/**
 * Created by heungseok2 on 2017-02-16.
 */

var express = require('express');
var app = express();
var http = require('http').Server(app);
// var world = require('./js/server_world');

app.use('/js', express.static(__dirname + '/js'));
app.use('/css', express.static(__dirname + '/css'));
app.use('/data', express.static(__dirname + '/data'));
app.use('/img', express.static(__dirname + '/img'));


app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});



http.listen(4444, function(){
    console.log("Server Running and Listen to port 4444");
});