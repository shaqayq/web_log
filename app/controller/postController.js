const postModel = require('../models/posts')
const validation = require('../validators/postValidation')
exports.index =async(req , res) => {

    const allPost =await postModel.getAll();
    res.render('posts', {layout: 'main' , allPost});
}

exports.create =async(req , res) => {

    
    res.render('newPost', {layout: 'main'});
}

exports.store =async(req , res) => {
    const {title , slug , content , status} = req.body
    const data={
        author_id: 1, 
        title: title,
        slug: slug,
        content: content,
        status: status
    }
   const checkValidation= validation(data);
   if (checkValidation.length == 0) {
  
    const errorMessage = checkValidation.join(', ');
    res.redirect(`/post/create?error=${errorMessage}`);
 
  } else {
    postModel.storePost(data);
    res.send(req.body);
    
  }
}