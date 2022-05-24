const mongoose = require('mongoose')

const UnitsSchema = new mongoose.Schema({
    unitID: {
        type: String,
    },
    moduleID: {
        type: String,
    },
    name: {
        type: String,
    },
    title: {
        type: String,
    },
    timePassed: {
        type: Number,
    },
    score: {
        type: Number,
    },
    image: {
        type: String,
    }
    
}, {
    timestamps: true
});



module.exports =  mongoose.model("Units", UnitsSchema)