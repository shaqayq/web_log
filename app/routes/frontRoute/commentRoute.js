const express = require('express')
const router = express.Router();
const commentController = require('../../controller/frontControllers/commentController')

router.post('/:post_id', commentController.storeCommnet)  



module.exports = router