var express = require('express');
var useragent = require('useragent');
var requestIp = require('request-ip');

var app = express();
var PORT = process.env.PORT || 8080;

app.use(requestIp.mw());



app.get('/',function(req, res){
    var headerObj = {};

    headerObj.ipAdress = req.clientIp;
    headerObj.language = req.headers["accept-language"].split(",")[0];
    headerObj.software = useragent.parse(req.headers['user-agent']).os.toString();

    res.send(headerObj);
});

app.listen(PORT,function(){
    console.log("Server is running on port: " + PORT);
})