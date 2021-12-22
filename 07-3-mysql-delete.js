let mysql = require('mysql')
let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'fjtravel'
})
let delMysql = 'delete from city where city_id = 9'
connection.query(delMysql, (err, res) => {
    if(err) {
        console.log(err);
    }
    else {
        console.log('删除成功！');
        console.log(res);
    }
})
connection.end()