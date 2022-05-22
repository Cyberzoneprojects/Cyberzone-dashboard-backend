const Services = require('../models/service.model')

saveService = (req, res) =>{
    console.log("req.body", req.body)
    const service = new Services(req.body)
    service.save(service
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



getServices = async (req, res) => {
    await Services.find({}, (err, service) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!service.length) {
            return res
                .status(404)
                .json({ success: false, error: `services not found` })
        }
        return res.status(200).json({ success: true, data: service })
    }).catch(err => console.log(err))
}

const deleteService = (req, res, next) => {
  console.log(req.params.id)
  Services.findByIdAndRemove(
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

  const updateService = (req, res, next)=> {
    console.log(req.body)
    Services.findByIdAndUpdate(
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
          console.log("Service updated successfully !");
          // console.log(res.json(data).body)
        }
      }
    );
  }



module.exports = {
    saveService,
    getServices,
    deleteService,
    updateService
}