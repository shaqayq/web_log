
const moment = require('moment')
const conatctModel = require('../models/contactModel')


exports.index =async(req, res) => {
 
    const msg = req.flash();
    const message = await conatctModel.getAll()
    const allMessage= message.map(msg=>({
    ...msg, 
    created_at: moment(msg.created_at).format('YYYY-MM-DD')
   }))
   
    res.render('message/', {layout: 'main' , allMessage , msg });
}


exports.deleteMessage = async(req , res) => {
  const {post_id} = req.params;
 
 await conatctModel.delete(post_id);
  req.flash('success' , "Message Deleted Successfully!!");
  res.redirect('/message')
}





