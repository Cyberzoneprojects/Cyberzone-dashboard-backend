const Resources = require('../models/resource.model')

saveRes = (req, res) =>{
    console.log("req.body", req.body)
    const reso = new Resources(req.body)
    reso.save(res
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



getRes = async (req, res) => {
    await Resources.find({}, (err, reso) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!reso.length) {
            return res
                .status(404)
                .json({ success: false, error: `users not found` })
        }
        return res.status(200).json({ success: true, data: moduls })
    }).catch(err => console.log(err))
}

const deleteRes = (req, res, next) => {
  console.log(req.params.id)
  Resources.findByIdAndRemove(
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

  const updateRes = (req, res, next)=> {
    console.log(req.body)
    Resources.findByIdAndUpdate(
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
          console.log("Resource updated successfully !");
          // console.log(res.json(data).body)
        }
      }
    );
  }



module.exports = {
    saveRes,
    getRes,
    deleteRes,
    updateRes
}