let http = require('http')
let fs = require('fs')
let url = require('url')
let path = require('path')
http.createServer((req, res) => {
    let pathName = url.parse(req.url).pathname
    if(pathName == '/') {
        pathName = 'index.html'
    }
    let extName = path.extname(pathName)
    if(pathName != '/favicon.ico') {
        fs.readFile('./WebService/' + pathName, (err, data) => {
            if(err) {
                console.log('404 Not Found!');
                fs.readFile('./WebService/404.html', (err, data) => {
                    if(err) {
                        console.log(err);
                    }
                    else {
                        res.writeHead(200, {                   
                            "Content-Type": "text/html; charset='utf-8'"
                        });
                        res.write(data)
                        res.end()
                    }
                })
                return
            }
            else {
                let ext = getExt(extName)
                res.writeHead(200, {
                    "Content-Type": ext + "; charset='utf-8'"
                })
                res.write(data)
                res.end()
            }
        })
    }
}).listen(8080)

getExt = (extName) => {
    switch(extName) {
        case '.html': return 'text/html';
        case '.css': return 'text/css';
        case '.js': return 'text/jss';
        default: return 'text/html'
    }
}