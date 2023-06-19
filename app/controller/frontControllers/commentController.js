const commentModel = require('../../models/commentModel')
const moment = require('moment')



exports.storeCommnet =async(req , res) => {
    const post_id = req.params.post_id
   
    const {user_name , user_email , user_comment , user_url} = req.body

    const data ={
        author_id: 'user' in req.session ? req.session.user.id : null,
        post_id: post_id,
        user_name,
        user_email,
        user_url,
        comment: user_comment
    }
  
    const result = await commentModel.store(data);
    if(result){
        res.redirect(`/slug/${post_id}`)
    }
    
}