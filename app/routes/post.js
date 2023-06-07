const express = require('express')
const router = express.Router();
const postController = require('')
router.get('/', postController.index)

module.exports = router