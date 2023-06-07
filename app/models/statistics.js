const db = require('../../database/mysql')

exports.totalUsers = async(req , res) => {
    const [users] = await db.query('SELECT COUNT(ID) as totalUser FROM users');
    console.log(users);
    return users[0].totalUser;
}