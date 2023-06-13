const { validationResult  , body} = require('express-validator');
const moment = require('moment')
const settingModel = require('../models/settingModel')
const definedSetting= require('../config/setting')

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
    
    const premittdSettingKeys =Object.keys(settings).filter(setting =>{
        return Object.keys(definedSetting).includes(setting);
    })

    const premittdSettings = {}
    premittdSettingKeys.forEach(key=>{
        premittdSettings[key] = settings[key]
    })

    const validatingSetting ={...definedSetting , ... premittdSettings}

    const result = await settingModel.update(validatingSetting);
    return res.redirect("/setting")
   
};




