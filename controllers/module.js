const ModuleData = require('../models/module')

exports.moduleData = (req, res) =>{
    // console.log("req.body", req.body)
    const data = new ModuleData(req.body)
    data.save((err, data)=>{
        if(err){
            return res.status(400).json({
                err
            })
            // console.log("the is an error")
        }
        res.json({
            res
        })
    })
}

