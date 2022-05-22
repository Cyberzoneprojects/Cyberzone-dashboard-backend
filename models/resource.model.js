const mongoose = require('mongoose')

const resourceSchema = new mongoose.Schema({
    
    
    description: {
        type: String,
        trim: true,
        require: true,
        maxlength: 60
    },
    title: {
        type: String,
        trim: true,
        require: true,
        maxlength: 90
    },
    image: {
        type: String,
        trim: true,
        require: true,
    }
});



module.exports =  mongoose.model("Resource", resourceSchema)