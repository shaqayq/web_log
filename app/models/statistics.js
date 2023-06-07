const db = require('../../database/mysql')

exports.totalUsers = async(req , res) => {
    const [users] = await db.query('SELECT COUNT(ID) as totalUser FROM users');

    return users[0].totalUser;
}

exports.totalPosts = async(req , res) => {
    const [posts] = await db.query('SELECT COUNT(ID) as totalPost FROM posts');

    return posts[0].totalPost;
}

exports.totalComment = async(req , res) => {
    const [comment] = await db.query('SELECT COUNT(ID) as totalComment FROM comments');

    return comment[0].totalComment;
}

exports.totalViews = async(req , res) => {
    const [view] = await db.query('SELECT sum(views) as totalView FROM posts');

    return view[0].totalView;
}