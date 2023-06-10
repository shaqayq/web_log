const db = require('../../database/mysql')

exports.getAll=async(req,res)=>{
    const [posts] = await db.query('SELECT p.* , u.full_name FROM posts p join users u on p.author_id = u.id');
   
    return posts; 
}

exports.storePost = async(data) => {

    const [result]= await db.query('INSERT INTO posts SET?' , data);
    return result;
}

exports.delete = async(id) => {
    const result = await db.query('DELETE FROM posts WHERE id=?' , id )
    return result;
}

exports.findById = async(id)=>{
    const result = await db.query("SELECT * FROM posts WHERE id=?" , id)
    return result
}

exports.update = async(data , id)=>{
    const result = db.query('UPDATE posts SET ? WHERE id=?' , [data , id])
    return result;
}