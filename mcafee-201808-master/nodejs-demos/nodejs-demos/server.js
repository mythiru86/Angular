var http = require('http');

http.createServer(function (req, res) {
    console.log(`received request: ${req.url}`);
    res.writeHead(200, {'Content-Type': 'text/plain'});

    if(req.url.toString()==='/time'){
        res.end(`Current Time is ${new Date().toLocaleTimeString()}`);
    }
    else
       res.end(`Hello World from : ${req.url}`);
}).listen(8080);

console.log('Sever Started on Port 8080');
