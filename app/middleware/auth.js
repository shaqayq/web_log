module.exports = (req, res , next) => {
    if(!req.session.hasOwnProperty('user')){
        return res.redirect('/auth/login')
    }
    const username = req.session.user.full_name;
    res.locals.username = username;
    next();
}