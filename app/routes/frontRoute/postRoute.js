const express = require('express')
const router = express.Router();
const postController = require('../../controller/frontControllers/postController')

router.get('/:post_id', postController.showPost)  
router.post('/:post_id', postController.storeCommnet)  



module.exports = router