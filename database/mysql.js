const mysql = require('mysql2')
const connection = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USERNAME,
    database: MYSQL_DATABSE,
    port: MYSQL_PORT
})

module.exports= connection.promise();