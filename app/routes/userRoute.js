const express = require('express')
const router = express.Router();
const userController = require('../controller/userController')
router.get('/', userController.index)
 router.get('/create' , userController.create)
// router.post('/store' , userController.store)
 router.get('/delete/:userId' , userController.deleteUser)
 router.get('/editUser' , userController.findUser)
router.post('/update/:userId' , userController.updateUser)




module.exports = router