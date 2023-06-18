const express = require('express')
const router = express.Router();
const homeController = require('../../controller/frontControllers/homeController')

router.get('/', homeController.index)  


module.exports = router