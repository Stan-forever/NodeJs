var fs = require('fs')
//读取文件
// fs.readFile('index.js', (err, res) => {
//     if(err) {
//         console.log(err);
//         return false
//     }
//     else {
//         console.log(res);
//     }
// })

//读取目录
fs.readdir('node_modules/tools_module', (err, res) => {
    if(err) {
        console.log(err);
        return false
    }
    else {
        console.log(res);
    }
})