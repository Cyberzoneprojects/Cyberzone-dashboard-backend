const Modules = require('../models/modul')

saveModul = (req, res) =>{
    console.log("req.body", req.body)
    const modul = new Modules(req.body)
    modul.save(modul
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



getModuls = async (req, res) => {
    await Modules.find({}, (err, moduls) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!moduls.length) {
            return res
                .status(404)
                .json({ success: false, error: `users not found` })
        }
        return res.status(200).json({ success: true, data: moduls })
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



// deleteModul = ()=>{

// Modules.delete("/modul/deleteModule/:moduleID", 
// (req, res, next) => {
//   studentSchema.findByIdAndRemove(
//       req.params.moduleID, (error, data) => {
//     if (error) {
//       return next(error);
//     } else {
//       res.status(200).json({
//         msg: data,
//       });
//     }
//   });
// });}



// const deleteModul = (req, res)=>{
//   const id = req.params.id
//   Modules.deleteOne({"_id": id}, (err,data)=>{
//     if(err) res.status(404).json({success: false, msg: "Something went wrong"})
//     res.status(200).json({success: true})
//   })
// }


// router.delete("/delete-student/:id", 
const deleteModul = (req, res, next) => {
  studentSchema.findByIdAndRemove(
      req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
};

module.exports = {
    saveModul,
    getModuls,
    deleteModul
}