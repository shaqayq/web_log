const db = require('../../database/mysql')

exports.totalUsers = async(req , res) => {
    const [users] = await db.query('SELECT COUNT(ID) as totalUser FROM users');

    return users[0].totalUser;
}
exports.totalPosts = async(req , res) => {
    const [posts] = await db.query('SELECT COUNT(ID) as totalpost FROM posts');

    return posts[0].totalpost;
}