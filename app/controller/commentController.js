const { validationResult  , body} = require('express-validator');
const moment = require('moment')
const CommentModel = require('../models/commentModel')


exports.index =async(req, res) => {
    const comments =await CommentModel.getAll();
    const allComment= comments.map(comment =>({
        ...comment , 
        created_at: moment(comment.created_at).format('YYYY-MM-DD')
    }))
    
        res.render('comment/', {layout: 'main' , allComment});
}


exports.deleteComment = (req , res) => {
  const {id} = req.params;
 
    CommentModel.delete(id);
 
  res.redirect('/comment')
}

exports.rejectComment= async(req , res)=>{
   const {id}= req.params;

    await CommentModel.reject(id);
    res.redirect('/comment')
}

exports.approveComment= async(req , res)=>{
    const {id}= req.params;
 
     await CommentModel.approve(id);
     res.redirect('/comment')
 }

// exports.findPost = async(req , res) => {

//   const {postId} = req.query; 
//   const [post] = await postModel.findById(postId);
//   return res.render('post/editPost', {layout: 'main' , post});
// }


// exports.updatePost = (req , res) => {
//   const {postId} = req.params;
//   const { title, slug, content, status } = req.body;
//   const data = {
//     author_id: 1,
//     title: title,
//     slug: slug,
//     content: content,
//     status: status,
//   };
//   postModel.update(data , postId)
//   res.redirect('/post')
// }
