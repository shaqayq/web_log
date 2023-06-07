const db = require('../../database/mysql')

exports.getAll=async(req,res)=>{
    const [posts] = await db.query('SELECT * FROM posts');
    console.log(posts);
    return posts; 
}