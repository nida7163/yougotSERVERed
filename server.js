var http = require("http");

var PORTONE = 7000;
var PORTTWO = 7500;

function handleRequestOne(req, res){
	res.end("it's werkin'");
}

function handleRequestTwo(req,res){
	res.end("not werkin' bro");

}


var serverOne = http.createServer(handleRequestOne);
var serverTwo = http.createServer(handleRequestTwo);



serverOne.listen(PORTONE, function() {

  console.log("Server listening on: http://localhost:%s", PORTONE);
});

serverTwo.listen(PORTTWO, function() {

  console.log("Server listening on: http://localhost:%s", PORTTWO);
});