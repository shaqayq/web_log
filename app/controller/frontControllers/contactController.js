const contactModel = require('../../models/contactModel')

exports.index = async(req , res) =>{
   
    const msg = req.flash()
   
    res.render('front/contact' , {layout: 'front' , showSidebar: true , msg}) 
}

exports.storeMessage = async(req ,res) => {
    const{name , email , subject , message} = req.body

    const data ={
        user_name: name,
        email ,
        subject, 
        message
    }

    const store_data = contactModel.stor(data);
     if(store_data) {
        req.flash('success' , 'Successfully Sent Your Message!')
        res.redirect('/contact');
     }
}


