const db = require('../../database/mysql')


exports.getAll = async(data) => {
    const [store_data] = await db.query('SELECT * FROM messages');
    return store_data;
}

exports.stor = async(data) => {
    const store_data = await db.query('INSERT INTO messages SET ?' , data);
    return store_data;
}

exports.delete = async(id) => {
    const result = await db.query('DELETE FROM messages WHERE id=?' , id )
    return result;
}