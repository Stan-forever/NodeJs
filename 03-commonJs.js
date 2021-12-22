var http = require("http")
var tools = require('tools_module')
http.createServer((req, res) => {
    if(req.url != '/favicon.ico') {
        res.writeHead(200, {
            "Content-Type": "text/html;charset=UTF-8"
          });
        res.write('<h1>Hello NodeJs</h1>')
        console.log(tools.add(1, 3, 5));
        console.log(tools.multiply(1, 2));
        res.end()
    }
}).listen(8888)