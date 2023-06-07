const express = require('express')
const router = express.Router();
const postController = require('../controller/postController')
router.get('/', postController.index)

module.exports = router