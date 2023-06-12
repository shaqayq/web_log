const adminRoute = require('./adminRoute')
const postRoute = require('./postRoute')
const commentRout = require('./commentRoute')
const userRoute = require('./userRoute')
const settingRoute = require('./settingRoute')
module.exports = app => {

    app.use('/admin', adminRoute),
    app.use('/post', postRoute),
    app.use('/comment', commentRout),
    app.use('/user',userRoute),
    app.use('/setting', settingRoute)



}