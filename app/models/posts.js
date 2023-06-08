const db = require('../../database/mysql')

exports.getAll=async(req,res)=>{
    const [posts] = await db.query('SELECT p.* , u.full_name FROM posts p join users u on p.author_id = u.id');
   console.log(posts);
    return posts; 
}

exports.storePost = async(data) => {

    const [result]= db.query('INSERT INTO posts SET?' , [data]);
    return result;
}