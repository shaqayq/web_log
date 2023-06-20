const settingModel = require('../models/settingModel')


module.exports = async(req, res , next) => {

    let title = await settingModel.setConfig('websit_title');
    let detail = await settingModel.setConfig('details');
    let user_can_comment = parseInt( await settingModel.setConfig('user_can_submit_comment'));
    let user_can_register = parseInt(await settingModel.setConfig('user_can_register'));

    
    const  setting = {
        title ,
        detail,
        user_can_comment,
        user_can_register
    }
   
    res.locals.setting = setting;
    next();
}