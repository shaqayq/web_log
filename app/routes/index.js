const adminRoute = require('./adminRoute')
const postRoute = require('./postRoute')
const commentRout = require('./commentRoute')
const userRoute = require('./userRoute')
const settingRoute = require('./settingRoute')
const authRoute= require('./authRoute')
const authController = require('../controller/authController')
const auth = require('../middleware/auth')
module.exports = app => {
    
    app.use('/admin',[auth], adminRoute),
    app.use('/post',[auth], postRoute),
    app.use('/comment',[auth], commentRout),
    app.use('/user',[auth],userRoute),
    app.use('/setting',[auth], settingRoute),
    app.use('/auth', authRoute)
    app.get('/logout',authController.logout )




}