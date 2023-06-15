const userModel = require('../models/userModel')
const bcrypt = require('bcrypt')

const userRole = require('../models/userRole')

exports.login = async(email , password) => {
    const users =await userModel.findByEmail(email);
 
    if(!users){
     return false;
    }
     return  bcrypt.compareSync(password , users.password) ? users : false ;
   
}

exports.register = async(username ,email, password )=>{
    const insertUser = await userModel.storeUser({
        full_name: username ,
        email: email ,
        password: password ,
        role: userRole.USER
    })

    return insertUser;

}