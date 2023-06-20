const db = require('../../database/mysql')

exports.getAll=async(req,res)=>{
    const [setting] = await db.query('SELECT * FROM setting ');
   
    return setting; 
}



exports.update = async(updateFeilds)=>{

    const updateQuery = Object.keys(updateFeilds).map(setting_name => {
        return `UPDATE setting SET setting_value ='${updateFeilds[setting_name]}' WHERE setting_name = '${setting_name}'`;
    })
    const result = db.query(`${updateQuery.join(';')}`);
    return result;
}

exports.setConfig =async(key)=>{
    const [config] = await db.query('SELECT setting_value FROM setting WHERE setting_name =? LIMIT 1' ,[key]);
    return config.length > 0 ? config[0].setting_value : null;
}