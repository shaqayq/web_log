const express = require('express')
const router = express.Router();
const contactController = require('../controller/contactController')

router.get('/', contactController.index)
router.get('/delete/:post_id' ,contactController.deleteMessage)









module.exports = router