const Attestation = require('../models/attestation')

exports.attestation = (req, res) =>{
    console.log("req.body", req.body)
    const attestation = new Attestation(req.body)
    user.save((err, attestation)=>{
        if(err){
            return res.status(400).json({
                err
            })
        }
        res.json({
            res
        })
    })
}