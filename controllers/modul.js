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

const deleteModul = (req, res, next) => {
  console.log(req.params.id)
  Modules.findByIdAndRemove(
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

// // UPDATE student

  const updateModule = (req, res, next)=> {
    console.log(req.body)
    Modules.findByIdAndUpdate(
      req.params.id,
      {
        $set: {...req.body},
      },
      (error, data) => {
        if (error) {
          return next(error)
        } else {
          console.log(data)
          res.json(data);
          console.log("Module updated successfully !");
          // console.log(res.json(data).body)
        }
      }
    );
  }



module.exports = {
    saveModul,
    getModuls,
    deleteModul,
    updateModule
}