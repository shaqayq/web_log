const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USERNAME,
    database: process.env.MYSQL_DATABASE,
    port: process.env.MYSQL_PORT
})


module.exports= connection.promise();