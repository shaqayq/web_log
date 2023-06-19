const db = require('../../database/mysql')

exports.getAll=async()=>{
    const [comments] = await db.query('SELECT c.* , p.title FROM comments c join posts p on c.post_id = p.id');
    return comments; 
}

exports.store = async(data) => {

    const [result]= await db.query('INSERT INTO comments SET?' , data);
    return result;
}

exports.delete = async(id) => {
    const result = await db.query('DELETE FROM comments WHERE id=?' , id )
    return result;
}

exports.reject = async(id)=>{
    const result = await db.query('UPDATE comments SET status = 0 WHERE id=?' , id)
    return result;
}

exports.approve = async(id)=>{
    const result = await db.query('UPDATE comments SET status = 1 WHERE id=?' , id)
    return result;
}

// exports.findById = async(id)=>{
//     const result = await db.query("SELECT * FROM posts WHERE id=?" , id)
//     return result
// }

// exports.update = async(data , id)=>{
//     const result = db.query('UPDATE posts SET ? WHERE id=?' , [data , id])
//     return result;
// }