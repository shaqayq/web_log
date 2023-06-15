const authService = require('../service/authService')
const userRole = require('../models/userRole')

exports.showLogin = (req , res) => {   
    const msg = req.flash()
    res.render('auth/login' , {layout: false , msg})
} 

exports.doLogin = async(req , res) =>{
    const {email , password} = req.body
  
  
    const user = await authService.login(email , password);
    
    if(!user){
        req.flash('error','Email or Password is Invalid!!')
      return   res.redirect('/auth/login')
    }

  req.session.user = user
  const redirectPath = user.role === userRole.ADMIN ? '/admin/dashboard' : '/'
  return res.redirect(redirectPath)
}

exports.showSignup = (req , res) => {   
  const msg = req.flash()
  res.render('auth/signup' , {layout: false , msg})
} 

