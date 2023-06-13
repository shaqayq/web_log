const { validationResult  , body} = require('express-validator');
const moment = require('moment')
const settingModel = require('../models/settingModel')


exports.index =async(req, res) => {

    const settings =await settingModel.getAll();
    const allSetting ={}
    settings.forEach(item=>{
        allSetting[item.setting_name] = item.setting_value
    })
  
    res.render('setting/', {layout: 'main' , config: allSetting , helpers: {
        ischecked: function(value, options) {
            return parseInt(value) === 1 ? options.fn(this) : options.inverse(this);
        }
    }});
}


exports.store = async (req, res) => {

    const settings = req.body;
    const validatingSetting  = {};
    Object.keys(settings).forEach(setting_name => {
        if(settings[setting_name] === 'on'){
            validatingSetting[setting_name] = 1;
        }else{
            validatingSetting[setting_name] = settings[setting_name]
        }
    })
    const result = await settingModel.update(validatingSetting);
    return res.redirect("/setting")
   
};




