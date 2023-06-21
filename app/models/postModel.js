const db = require('../../database/mysql')

exports.showAll=async()=>{
  
    const [posts] = await db.query(
        `SELECT p.* , u.full_name FROM posts
         p join users u on p.author_id = u.id
         `);
   
    return posts; 
}

exports.getAll=async(page, perPage)=>{
    const offset = (page - 1) * perPage;
    const [posts] = await db.query(
        `SELECT p.* , u.full_name FROM posts
         p join users u on p.author_id = u.id
         LIMIT ${offset} , ${perPage}
         `);
   
    return posts; 
}

exports.countPost  = async() =>{
   const [rows , fields] =await db.query('SELECT COUNT(id) as totalPost FROM posts');
   return rows[0].totalPost;
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
    const result = await db.query("SELECT p.* , u.full_name FROM posts p join users u on p.author_id = u.id WHERE p.id=?" , id)
    return result
}

exports.update = async(data , id)=>{
    const result = db.query('UPDATE posts SET ? WHERE id=?' , [data , id])
    return result;
}