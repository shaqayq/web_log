const db = require('../../database/mysql')

exports.getAll=async(req,res)=>{
    const [posts] = await db.query('SELECT p.* , u.full_name FROM posts p join users u on p.author_id = u.id');
   
    return posts; 
}

exports.storePost = async(data) => {

    const [result]= await db.query('INSERT INTO posts SET?' , data);
    return result;
}