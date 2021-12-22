let mysql = require('mysql')
let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'fjtravel'
})
connection.connect()
connection.query('select * from city', (err, res, fields) => {
    if(err) throw err
    console.log(res);
})
connection.end()