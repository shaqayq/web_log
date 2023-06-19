const postModel = require('../../models/postModel')
const commentModel = require('../../models/commentModel')
const moment = require('moment')
const _ = require('lodash')



exports.showPost = async(req , res) => {
    const {post_id} = req.params;
    const getPost =await postModel.findById(post_id);
    
    if(!getPost){
        return res.redirect('/404')
    }
  
    getPost.created_at = moment(getPost.created_at).format('YYYY-MM-DD')
  
 
    const getComment = await commentModel.getSinglePostComment(post_id);
    const comments = getComment.map(comment=>{
        // ...comment,
        comment.created_at= moment(comment.created_at).format('YYYY-MM-DD');
        return comment;
    })
    
    const newComment = _.groupBy(comments ,'parent');
   
  
    const totalComment =await commentModel.countComment(post_id);
    
    return res.render('front/post/singlePost' , {
        layout: 'front', 
        post: getPost , 
        comments: newComment[0] , 
        totalComment,
        helpers: {
            hasChildren: function(commentID , options) {
                return commentID in newComment;
            },
            getChildren: function(commentID , options){
                return newComment[commentID]
            }
        }
    
    })
}

