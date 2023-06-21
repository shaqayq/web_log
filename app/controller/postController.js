const { validationResult  , body} = require('express-validator');
const moment = require('moment')
const postModel = require('../models/postModel');
const {v4: uuid4}= require('uuid')
const path = require('path');

exports.index =async(req, res) => {
   
    const msg = req.flash();

    const posts =await postModel.showAll();
    const allPost= posts.map(post=>({
    ...post, 
    created_at: moment(post.created_at).format('YYYY-MM-DD')
   }))
    res.render('post/', {layout: 'main' , allPost , msg});
}

exports.create =async(req , res) => {

   
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

  const fileEXT = req.files.img.name.split('.')[1];
 
  const newFileName = `${uuid4()}.${fileEXT}`;
  const user_Session= req.session.user

  const { title, slug, content, status } = req.body;

  const data = {
    author_id: user_Session.id,
    title: title,
    slug: slug,
    content: content,
    status: status,
    img: newFileName
  };


 
   const insert= postModel.storePost(data);

   if(insert){
    if(req.files.img){
    
    
     const projectRootDir = path.resolve(__dirname, '../../');
    const newPath = path.join(projectRootDir, 'public', 'photos', newFileName);

    console.log(projectRootDir);
     req.files.img.mv(newPath , function(err) {
       console.log(err);
     });

    }
     req.flash('success', 'Post add successfully!')
     return res.redirect("/post")
   }
 
 
   

};

exports.deletePost = (req , res) => {
  const {postId} = req.params;
 
 const deletePost = postModel.delete(postId);
 if(deletePost){
  req.flash('success' , "Post Deleted Successfully!!");
  res.redirect('/post')
 }
  
}

exports.findPost = async(req , res) => {

  const {postId} = req.query; 
  
  const [post] = await postModel.findById(postId);

  return res.render('post/editPost', {layout: 'main' , post , helpers:{
    isSelectedStatus: function (status, option) {
      return post[0].status === status ? option.fn(this) : option.inverse(this)
    }
  }});
}


exports.updatePost = (req , res) => {

  const user_Session= req.session.user

  const {postId} = req.params;
  const { title, slug, content, status } = req.body;
 
  const data = {
    author_id: user_Session.id,
    title: title,
    slug: slug,
    content: content,
    status: status,
  
  };

  if(req.files){
    const fileEXT = req.files.img.name.split('.')[1];
    const newFileName = `${uuid4()}.${fileEXT}`;
    data.img = newFileName
    
    const projectRootDir = path.resolve(__dirname, '../../');
   const newPath = path.join(projectRootDir, 'public', 'photos', newFileName);

   console.log(projectRootDir);
    req.files.img.mv(newPath , function(err) {
      console.log(err);
    });

   }
  postModel.update(data , postId)
  res.redirect('/post')
}
