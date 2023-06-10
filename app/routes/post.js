const express = require('express')
const router = express.Router();
const postController = require('../controller/postController')
router.get('/', postController.index)
router.get('/create' , postController.create)
router.post('/store' , postController.store)
router.get('/delete/:postId' , postController.deletePost)
router.get('/editPost' , postController.findPost)
router.post('/update/:postId' , postController.updatePost)




module.exports = router