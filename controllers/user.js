const User = require('../models/user')

signup = (req, res) =>{
    console.log("req.body", req.body)
    const user = new User(req.body)
    user.save(user
        // if(err){
        //     return res.status(400).json({
        //         err
        //     })
        // }
        // res.json({
        //     res
        // })
    )
}



getModules = async (req, res) => {
    await User.find({}, (err, users) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!users.length) {
            return res
                .status(404)
                .json({ success: false, error: `users not found` })
        }
        return res.status(200).json({ success: true, data: users })
    }).catch(err => console.log(err))
}

// router.post("/create-student", (req, res, next) => {
//     studentSchema.create(req.body, (error, data) => {
//       if (error) {
//         return next(error);
//       } else {
//         console.log(data);
//         res.json(data);
//       }
//     });
//   });


module.exports = {
    signup,
    getModules
}