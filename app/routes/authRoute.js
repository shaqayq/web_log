const express = require('express')
const router = express.Router();
const authController = require('../controller/authController')

router.get('/login', authController.showLogin)
router.post('/signin', authController.doLogin)
router.get('/signup', authController.showSignup)
router.post('/register', authController.doregister)








module.exports = router