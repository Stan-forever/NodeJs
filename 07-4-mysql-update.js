let mysql = require('mysql')
let connection= mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'fjtravel'
})
let updateSql = 'update city set city_name = ? where city_id = ?'
let params = ['厦门', '1']
connection.query(updateSql, params, (err, res) => {
    if(err) {
        console.log(err);
    }
    else {
        console.log('修改成功！');
        console.log(res);
    }
})