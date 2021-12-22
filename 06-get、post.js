let http = require('http')
var items = []
http.createServer((req, res) => {
  // 设置跨域的域名，* 代表允许任意域名跨域
  res.setHeader('Access-Control-Allow-Origin', '*');
  // 设置 header 类型
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  // 跨域允许的请求方式
  res.setHeader('Content-Type', 'application/json');
  switch(req.method) {
      case 'OPTIONS' :
          res.statusCode = 200
          res.end()
          break;
      case 'GET' :
          let data = JSON.stringify(items)
          res.write(data)
          res.end()
          break;
      case 'POST' :
          let item = ''
          req.on('data', chunk => {
              item += chunk
          })
          req.on('end', () => {
              item = JSON.parse(item)
              items.push(item.item)
              let data = JSON.stringify(items)
              res.write(data)
              res.end()           
          })
          break;
  }
}).listen(3000)