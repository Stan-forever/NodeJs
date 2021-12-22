var fs = require('fs')
fs.stat('index.js', (err, res) => {
    if(err) {
        console.log(err);
        return false
    }
    else {
        console.log(res);
        console.log(`文件：${res.isFile()}`); 
    // Console：文件：true  
    console.log(`目录：${res.isDirectory()}`); 
    // Console：目录：false
    return false;
    }
})