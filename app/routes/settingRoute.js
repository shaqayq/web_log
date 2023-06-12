const express = require('express')
const router = express.Router();
const settingController = require('../controller/settingController')
router.get('/', settingController.index)
// router.get('/create' , settingController.create)
// router.post('/store' , settingController.store)
// router.get('/delete/:settingId' , settingController.deleteSetting)
// router.get('/editsetting' , settingController.findSetting)
// router.post('/update/:settingId' , settingController.updateSetting)




module.exports = router