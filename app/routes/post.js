const express = require('express')
const router = express.Router();
const postController = require('')
router.get('/dashboard', postController.index)

module.exports = router