const mongoose = require('mongoose')

const serviceSchema = new mongoose.Schema({
    
    dashboard_id: {
        type: String,
        require: true,
        index:{unique: true}
    },
    service_id: {
        type: String,
        trim: true,
        require: true,
        maxlength: 60
    },
    service_name: {
        type: String,
        trim: true,
        require: true,
        maxlength: 60
    },
    service_amount: {
        type: Number,
        trim: true,
        require: true,
        maxlength: 90
    },
    number_of_subscribers: {
        type: Number,
        trim: true,
        require: true,
    },
    short_description: {
        type: String,
        trim: true,
        require: true,
    }
});


module.exports =  mongoose.model("Sevices", serviceSchema)