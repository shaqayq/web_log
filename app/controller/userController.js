const { validationResult  , body} = require('express-validator');
const moment = require('moment')
const userModel = require('../models/userModel')


exports.index =async(req, res) => {
    const users =await userModel.getAll();
    const alluser= users.map(user=>({
    ...user, 
    created_at: moment(user.created_at).format('YYYY-MM-DD')
   }))
    res.render('user/', {layout: 'main' , alluser});
}

exports.create =async(req , res) => {

    const error = req.body.error;  
    res.render('user/newuser', {layout: 'main'});
}

// exports.store = async (req, res) => {

//   const validateData = [   
//     body('title').notEmpty().withMessage('*** Title is required ***'),
//     body('slug').notEmpty().withMessage('*** Slug is required ***'),
//     body('content').notEmpty().withMessage('*** Content is required ***'), 
//   ];

//   for (const validator of validateData) {
//     await validator.run(req);
//   }

//   const errors = validationResult(req);
//   if (!errors.isEmpty()) {
//     return res.render('newuser', { errors: errors.array() });
//   } 

//   const { title, slug, content, status } = req.body;
//   const data = {
//     author_id: 1,
//     title: title,
//     slug: slug,
//     content: content,
//     status: status,
//   };

//    userModel.storeuser(data);
//    return res.redirect("/user")

// };

exports.deleteUser = (req , res) => {
  const {userId} = req.params;
 
  userModel.delete(userId);
  res.redirect('/user')
}

exports.findUser = async(req , res) => {

  const {userId} = req.query; 
  const [user] = await userModel.findById(userId);

  return res.render('user/editUser', {layout: 'main' , user , helpers:{
    isSelectedRole: function (role, option) {
      return user[0].role === role ? option.fn(this) : option.inverse(this)
    }
  }});
}



exports.updateUser = (req , res) => {
  const {userId} = req.params;
  const { full_name, email, password, role } = req.body;
  const data = {
   
    full_name: full_name,
    email: email,
    password: password,
    role: role
  };
  userModel.update(data , userId)
  res.redirect('/user')
}
