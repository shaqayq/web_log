const express = require('express')
const router = express.Router();
const homeController = require('../../controller/frontControllers/homeController')
const conatactController = require('../../controller/frontControllers/contactController')

router.get('/', homeController.index)  
router.get('/contact' , conatactController.index) 
router.post('/send_msg' , conatactController.storeMessage) 



module.exports = router