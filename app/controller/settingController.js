const { validationResult  , body} = require('express-validator');
const moment = require('moment')
const settingModel = require('../models/settingModel')


exports.index =async(req, res) => {

    const settings =await settingModel.getAll();
   const allsetting= settings.map(setting=>({
    ...setting, 
    created_at: moment(setting.created_at).format('YYYY-MM-DD')
   }))
    res.render('setting/', {layout: 'main' , allsetting});
}


exports.store = async (req, res) => {

const settings = req.body;
    const validatingSetting  = {};
    Object.keys(settings).forEach(setting_name => {
        if(settings[setting_name]=== 'on'){
            validatingSetting[setting_name] = 1;
        }else{
            validatingSetting[setting_name] = settings[setting_name]
        }
    })
    const result = await settingModel.update(validatingSetting);
    return res.redirect("/setting")
   
};




