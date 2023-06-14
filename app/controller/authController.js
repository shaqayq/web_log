const authService = require('../service/authService')
exports.showLogin = (req , res) => {   
    const msg = req.flash()
    res.render('auth/login' , {layout: false , msg})
} 

exports.doLogin = async(req , res) =>{
    const {email , password} = req.body
  
  
    const isValid = await authService.login(email , password);
    
    if(!isValid){
        req.flash('error','Email or Password is Invalid!!')
      return   res.redirect('/auth/login')
    }

   return res.redirect('/admin/dashboard')
}