const postModel = require('../../models/postModel')
const moment = require('moment')




exports.showPost = async(req , res) => {

    const {post_id} = req.params;
    const getPost =await postModel.findById(post_id);
    if(!getPost){
        return res.redirect('/404')
    }
    const post = getPost.map(p =>({
        ...p ,
        created_at: moment(p.created_at).format('YYYY-MM-DD')
    }))
    
    return res.render('front/post/singlePost' , {layout: 'front', post})
}