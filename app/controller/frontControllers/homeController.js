const postModel = require('../../models/postModel')
const moment = require('moment')
const word_limit = require('../../presenter/post_present')

exports.index = async(req , res) =>{
    const page = 'page' in req.query ? parseInt(req.query.page) : 1;
    const perPage = 4 ;

    const all_post =await postModel.getAll(page , perPage);
    const total_post = await postModel.countPost();
    const total_page = Math.ceil(total_post /perPage);
  
    const pagination = {
        page ,
        total_page,
        nextPage : page < total_page ? page +1 : total_page,
        prevPage: page > 1 ? page - 1 : 1 ,
        hasNext: page < total_page,
        hasPrev: page > 1

    }

    const posts = all_post.map(post =>( {
        ...post , 
        content: word_limit.excerpt(post.content) ,
        created_at:  moment(post.created_at).format('YYYY-MM-DD'),
    }))
 
    res.render('front/home' , {layout: false , posts , pagination}) 
}