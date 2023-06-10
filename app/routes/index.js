const adminRoute = require('./admin')
const postRoute = require('./post')
const commentRout = require('./comment')
module.exports = app => {

    app.use('/admin', adminRoute),
    app.use('/post', postRoute),
    app.use('/comment', commentRout)

}