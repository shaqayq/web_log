const postModel = require('../../models/postModel')
const moment = require('moment')
const word_limit = require('../../presenter/post_present')

exports.index = async(req , res) =>{
    const all_post =await postModel.getAll();
    const posts = all_post.map(post =>( {
        ...post , 
        content: word_limit.excerpt(post.content) ,
        created_at:  moment(post.created_at).format('YYYY-MM-DD'),
        }))
 
    res.render('front/home' , {layout: false , posts}) 
}