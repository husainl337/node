var express = require("express");
var http = require("http");
var app = express();

app.use(function(req, res){
    var path = req.url;

    if(path == '/'){
        res.end("server running");
    } else if (path == '/about'){
        res.end("helo man");
    }
    
    
});

http.createServer(app).listen(8001, 'localhost');
console.log("server running at http://localhost:8001")