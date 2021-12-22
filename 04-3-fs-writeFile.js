var fs = require('fs')
//写入文件（如果文件不存在的话，就新建一个文件。存在文件，但文件内容为空创建新内容，不为空覆盖掉文件内容）
fs.writeFile('node_modules/tools_module/test.txt', '尽信书，不如无书；尽看代码，不如删掉这些文件。', err => {
    if(err) {
        console.log(err);
        return false       
    }
    else {
        console.log('写入成功！');
    }
})

//追加文件内容
// fs.appendFile('index.js', 'hhh', err => {
//     if(err) {
//         console.log(err);
//         return false
//     }
//     else {
//         console.log('追加成功！');
//     }
// })

//删除文件
// fs.unlink('text.txt', err => {
//     if(err) {
//         console.log(err);
//         return false
//     }
//     else {
//         console.log('suc');
//     }
// })