const postModel = require('../models/posts')
exports.index =async(req , res) => {

    const allPost =await postModel.getAll();
    res.render('posts', {layout: 'main' , allPost});
}