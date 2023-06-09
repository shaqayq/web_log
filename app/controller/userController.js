const { validationResult  , body} = require('express-validator');
const moment = require('moment')
const userModel = require('../models/userModel')
const { v4: uuid4 } = require('uuid')
const path = require('path');

exports.index =async(req, res) => {
  const msg = req.flash();
    const users =await userModel.getAll();
    const alluser= users.map(user=>({
    ...user, 
    created_at: moment(user.created_at).format('YYYY-MM-DD')
   }))
    res.render('user/', {layout: 'main' , alluser , msg});
}

exports.create =async(req , res) => {

    const error = req.body.error;  
    res.render('user/newuser', {layout: 'main'});
}

exports.store = async (req, res) => {
  const validateData = [   
    body('full_name').notEmpty().withMessage('*** Full_Name is required ***'),
    body('email').notEmpty().withMessage('*** Email is required ***'),
    body('password').notEmpty().withMessage('*** Password is required ***'), 
  ];

  for (const validator of validateData) {
    await validator.run(req);
  }

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.render('newUser', { errors: errors.array() });
  } 

  

  const { full_name, email, password, role } = req.body;
  const data = {
  
    full_name: full_name,
    email: email,
    password: password,
    role: role,
   
  };

   const insert =userModel.storeUser(data);
   if(insert){
    if (req.files) {
      const fileEXT = req.files ? req.files.img.name.split('.')[1] : '';
      const newFileName = `${uuid4()}.${fileEXT}`;
      data.profile = newFileName
      const projectRootDir = path.resolve(__dirname, '../../');
      const newPath = path.join(projectRootDir, 'public', 'photos', 'users', newFileName);

      console.log(projectRootDir);
      req.files.img.mv(newPath, function (err) {
        console.log(err);
      });

    }
    req.flash('success' , "User Added Successfully!!");
   return res.redirect("/user")
   }
  
};


exports.deleteUser = (req , res) => {
  const {userId} = req.params;
 
  userModel.delete(userId);
  req.flash('success' , "User Deleted Successfully!!");
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

  if (req.files) {
    const fileEXT = req.files.img.name.split('.')[1];
    const newFileName = `${uuid4()}.${fileEXT}`;
    data.profile = newFileName

    const projectRootDir = path.resolve(__dirname, '../../');
    const newPath = path.join(projectRootDir, 'public', 'photos', 'users', newFileName);

    console.log(projectRootDir);
    req.files.img.mv(newPath, function (err) {
      console.log(err);
    });

  }
  userModel.update(data , userId)
  res.redirect('/user')
}
