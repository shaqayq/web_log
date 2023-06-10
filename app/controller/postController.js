const { validationResult  , body} = require('express-validator');
const moment = require('moment')
const postModel = require('../models/posts')


exports.index =async(req, res) => {

    const posts =await postModel.getAll();
   const allPost= posts.map(post=>({
    ...post, 
    created_at: moment(post.created_at).format('YYYY-MM-DD')
   }))
    res.render('post/', {layout: 'main' , allPost});
}

exports.create =async(req , res) => {

    const error = req.body.error;
   
    res.render('post/newPost', {layout: 'main'});
}

exports.store = async (req, res) => {

  const validateData = [   
    body('title').notEmpty().withMessage('*** Title is required ***'),
    body('slug').notEmpty().withMessage('*** Slug is required ***'),
    body('content').notEmpty().withMessage('*** Content is required ***'), 
  ];

  for (const validator of validateData) {
    await validator.run(req);
  }

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.render('newPost', { errors: errors.array() });
  } 

  const { title, slug, content, status } = req.body;
  const data = {
    author_id: 1,
    title: title,
    slug: slug,
    content: content,
    status: status,
  };

   postModel.storePost(data);
   return res.redirect("/post")

};

exports.deletePost = (req , res) => {
  const {postId} = req.params;
 
  postModel.delete(postId);
  res.redirect('/post')
}

exports.findPost = async(req , res) => {

  const {postId} = req.query; 
  const [post] = await postModel.findById(postId);
  return res.render('post/editPost', {layout: 'main' , post});
}


exports.updatePost = (req , res) => {
  const {postId} = req.params;
  const { title, slug, content, status } = req.body;
  const data = {
    author_id: 1,
    title: title,
    slug: slug,
    content: content,
    status: status,
  };
  postModel.update(data , postId)
  res.redirect('/post')
}
