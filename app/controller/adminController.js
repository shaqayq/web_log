const statistics = require('../models/statistics')

exports.index = async (req,res) => {
    const data ={
        totalUser: await statistics.totalUsers(),
    }
    res.render('dashboard', { layout: 'main' , ...data});
}