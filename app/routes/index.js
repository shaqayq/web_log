const adminRoute = require('./admin')
const postRoute = require('./post')
module.exports = app => {

    app.use('/admin', adminRoute),
    app.use('/post', postRoute)
}