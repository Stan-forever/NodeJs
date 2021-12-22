let mysql = require('mysql')
let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'fjtravel'
})
let addSql = 'insert into city(city_id, city_name) values(?, ?)'
let addParams = ['9', '上海']
connection.query(addSql, addParams, (err, res) => {
    if(err) {
        console.log(err);
        return
    }
    else {
        console.log('新增成功！');
        console.log(res);
    }
})
connection.end()