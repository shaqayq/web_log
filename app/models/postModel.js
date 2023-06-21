const db = require('../../database/mysql')

//For Backend Posts List
exports.showAll=async()=>{
  
    const [posts] = await db.query(
        `SELECT p.* , u.full_name FROM posts
         p join users u on p.author_id = u.id
         `);
   
    return posts; 
}

//For Front-End Posts List
exports.getAll=async(page, perPage)=>{
    const offset = (page - 1) * perPage;
    const [posts] = await db.query(
        `SELECT p.* , u.full_name FROM posts
         p join users u on p.author_id = u.id
         WHERE p.status= 1
         LIMIT ${offset} , ${perPage}
         `);
   
    return posts; 
}

exports.getLatest=async()=>{
  
    const [posts] = await db.query(
        `SELECT p.* , u.full_name FROM posts
         p join users u on p.author_id = u.id
         ORDER BY u.created_at DESC
         LIMIT 5
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
    const [result] = await db.query("SELECT p.* , u.full_name FROM posts p join users u on p.author_id = u.id WHERE p.id=? LIMIT 1" , id)
    return result[0]
}

exports.update = async(data , id)=>{
    const result = db.query('UPDATE posts SET ? WHERE id=?' , [data , id])
    return result;
}