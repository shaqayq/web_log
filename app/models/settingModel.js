const db = require('../../database/mysql')

exports.getAll=async(req,res)=>{
    const [setting] = await db.query('SELECT * FROM setting ');
   
    return setting; 
}

// exports.storeSetting = async(data) => {

//     const [result]= await db.query('INSERT INTO setting SET?' , data);
//     return result;
// }

// exports.delete = async(id) => {
//     const result = await db.query('DELETE FROM setting WHERE id=?' , id )
//     return result;
// }

// exports.findById = async(id)=>{
//     const result = await db.query("SELECT * FROM setting WHERE id=?" , id)
//     return result
// }

// exports.update = async(data , id)=>{
//     const result = db.query('UPDATE setting SET ? WHERE id=?' , [data , id])
//     return result;
// }