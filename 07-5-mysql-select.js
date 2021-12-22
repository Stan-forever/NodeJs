let mysql = require('mysql')
let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'fjtravel'
})
let selectSql = 'select city_name from city where city_id = 1'
connection.query(selectSql, (err, res) => {
    if(err) {
        console.log(err);
    }
    else {
        console.log('查询成功！');
        console.log(res);
    }
})