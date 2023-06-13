const db = require('../../database/mysql')
const bcrypt = require('bcrypt')
exports.getAll=async(req,res)=>{
    const [users] = await db.query('SELECT * FROM users ');
   
    return users; 
}



exports.storeUser = async(data) => {
  
   
    const hash = bcrypt.hashSync(data.password , 10 );
    const newData = {...data , password: hash}
    const [result]= await db.query('INSERT INTO users SET?' , newData);
    return result;
   
}

exports.delete = async(id) => {
    const result = await db.query('DELETE FROM users WHERE id=?' , id )
    return result;
}

exports.findById = async(id)=>{
    const result = await db.query("SELECT * FROM users WHERE id=?" , id)
    return result
}

exports.update = async(data , id)=>{
    const result = db.query('UPDATE users SET ? WHERE id=?' , [data , id])
    return result;
}

