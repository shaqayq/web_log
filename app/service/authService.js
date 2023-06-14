const userModel = require('../models/userModel')
const bcrypt = require('bcrypt')
exports.login = async(email , password) => {
    const users =await userModel.findByEmail(email);
 
    if(!users){
     return false;
    }
     return  bcrypt.compareSync(password , users.password) ? users : false ;
   
}