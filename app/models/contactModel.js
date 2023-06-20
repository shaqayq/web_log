const db = require('../../database/mysql')

exports.stor = async(data) => {
    const store_data = await db.query('INSERT INTO messages SET ?' , data);
    return store_data;
}