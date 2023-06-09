const statistics = require('../models/statistics')

exports.index = async (req,res) => {
    const data ={
        totalUser: await statistics.totalUsers(),
        totalPost: await statistics.totalPosts(),
        totalComment: await statistics.totalComment(),
        totalView: await statistics.totalViews()
    }
    res.render('dashboard', { layout: 'main' , ...data});
}