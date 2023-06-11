const db = require('../../database/mysql')

exports.getAll=async(req,res)=>{
    const [users] = await db.query('SELECT p.* , u.full_name FROM users p join users u on p.author_id = u.id');
   
    return users; 
}

// exports.storePost = async(data) => {

//     const [result]= await db.query('INSERT INTO users SET?' , data);
//     return result;
// }

// exports.delete = async(id) => {
//     const result = await db.query('DELETE FROM users WHERE id=?' , id )
//     return result;
// }

// exports.findById = async(id)=>{
//     const result = await db.query("SELECT * FROM users WHERE id=?" , id)
//     return result
// }

// exports.update = async(data , id)=>{
//     const result = db.query('UPDATE users SET ? WHERE id=?' , [data , id])
//     return result;
// }