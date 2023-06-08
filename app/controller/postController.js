const postModel = require('../models/posts')
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
    
    postModel.storePost(data);

  res.send(req.body);
}