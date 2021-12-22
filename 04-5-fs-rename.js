var fs = require('fs')

//重命名
fs.rename('index.js', 'test.txt', err => {
    if(err) {
        console.log(err);
        return false
    }
    else {
        console.log('suc');
    }
})

//剪切
fs.rename('index.js', 'node_modules/tools_module/test.txt', err => {
    if(err) {
        console.log(err);
        return false
    }
    else {
        console.log('suc');
    }
})