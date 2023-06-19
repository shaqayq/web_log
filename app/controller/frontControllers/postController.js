const postModel = require('../../models/postModel')
const moment = require('moment')
const word_limit = require('../../presenter/post_present')



exports.showPost = async(req , res) => {

    const {post_id} = req.params;

    const post = postModel.findById(post_id);
    return res.render('front/post/singlePost' , {layout: 'front'})
}