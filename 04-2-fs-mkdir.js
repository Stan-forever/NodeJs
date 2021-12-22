var fs = require('fs')
//创建目录
fs.mkdir('css', err => {
    if(err) {
        console.log(err);
    }
    else {
        console.log('创建目录成功！');
    }
})

//删除目录
// fs.rmdir('css', err => {
//     if(err) {
//         console.log(err);
//     }
//     else {
//         console.log('删除目录成功！');
//     }
// })
