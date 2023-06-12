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

// exports.create =async(req , res) => {

//     const error = req.body.error;
   
//     res.render('setting/newsetting', {layout: 'main'});
// }

// exports.store = async (req, res) => {

//   const validateData = [   
//     body('title').notEmpty().withMessage('*** Title is required ***'),
//     body('slug').notEmpty().withMessage('*** Slug is required ***'),
//     body('content').notEmpty().withMessage('*** Content is required ***'), 
//   ];

//   for (const validator of validateData) {
//     await validator.run(req);
//   }

//   const errors = validationResult(req);
//   if (!errors.isEmpty()) {
//     return res.render('newsetting', { errors: errors.array() });
//   } 

//   const { title, slug, content, status } = req.body;
//   const data = {
//     author_id: 1,
//     title: title,
//     slug: slug,
//     content: content,
//     status: status,
//   };

//    settingModel.storesetting(data);
//    return res.redirect("/setting")

// };

// exports.deletesetting = (req , res) => {
//   const {settingId} = req.params;
 
//   settingModel.delete(settingId);
//   res.redirect('/setting')
// }

// exports.findsetting = async(req , res) => {

//   const {settingId} = req.query; 
//   const [setting] = await settingModel.findById(settingId);

//   return res.render('setting/editsetting', {layout: 'main' , setting , helpers:{
//     isSelectedStatus: function (status, option) {
//       return setting[0].status === status ? option.fn(this) : option.inverse(this)
//     }
//   }});
// }


// exports.updatesetting = (req , res) => {
//   const {settingId} = req.params;
//   const { title, slug, content, status } = req.body;
//   const data = {
//     author_id: 1,
//     title: title,
//     slug: slug,
//     content: content,
//     status: status,
//   };
//   settingModel.update(data , settingId)
//   res.redirect('/setting')
// }
