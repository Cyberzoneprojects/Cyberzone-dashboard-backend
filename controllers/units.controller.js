const Units = require('../models/units.model.js')

saveUnit = (req, res) =>{
    console.log("req.body", req.body)
    const unit = new Units(req.body)
    unit.save(unit
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



getUnits = async (req, res) => {
    await Units.find({}, (err, units) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!units.length) {
            return res
                .status(404)
                .json({ success: false, error: `units not found` })
        }
        return res.status(200).json({ success: true, data: units })
    }).catch(err => console.log(err))
}

const deleteUnit = (req, res, next) => {
  console.log(req.params.id)
  Units.findByIdAndRemove(
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

  const updateUnit = (req, res, next)=> {
    console.log(req.body)
    Units.findByIdAndUpdate(
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
          console.log("Units updated successfully !");
          // console.log(res.json(data).body)
        }
      }
    );
  }



module.exports = {
    saveUnit,
    getUnits,
    deleteUnit,
    updateUnit
}