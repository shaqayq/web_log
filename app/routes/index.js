const adminRoute = require('./adminRoute')
const postRoute = require('./postRoute')
const commentRout = require('./commentRoute')
const userRoute = require('./userRoute')
module.exports = app => {

    app.use('/admin', adminRoute),
    app.use('/post', postRoute),
    app.use('/comment', commentRout),
    app.use('/user',userRoute)


}