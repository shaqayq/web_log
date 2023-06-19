const express = require('express')
const router = express.Router();
const postController = require('../../controller/frontControllers/postController')

router.get('/:post_id', postController.showPost)  


module.exports = router