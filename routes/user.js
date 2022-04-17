const express = require('express')

const router = express.Router()


const modulContrl = require('../controllers/user')
router.post('/signup', signup)


router.get('/signup', modulContrl.getModules)

module.exports = router;


// let userSchema = require("../models/user");
  
// // CREATE Student
// router.post("/signup", (req, res, next) => {
//   userSchema.create(req.body, (error, data) => {
//     if (error) {
//       return next(error);
//     } else {
//       console.log(data);
//       res.json(data);
//     }
//   });
// });