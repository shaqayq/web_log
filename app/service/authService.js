const userModel = require('../models/userModel')

exports.login = async(email , password) => {
    const users = userModel.findByEmail(email);
    if(!users){
        return false;
    }
}