const express = require('express')
const router = express.Router();
const commentController = require('../controller/commentController')
router.get('/', commentController.index)
router.get('/create' , commentController.create)
router.post('/store' , commentController.store)
router.get('/delete/:Id' , commentController.deleteComment)
router.get('/editComment' , commentController.findComment)
router.post('/update/:Id' , commentController.updateComment)

module.exports = router