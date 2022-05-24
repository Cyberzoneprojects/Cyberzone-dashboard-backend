const mongoose = require('mongoose')

const moduleSchema = new mongoose.Schema({
    
    moduleID: {
        type: String,
        require: true,
        index:{unique: true}
    },
    serviceID: {
        type: String,
        require: true,
    },
    name: {
        type: String,
        trim: true,
        require: true,
    },
    title: {
        type: String,
        trim: true,
        require: true,
        maxlength: 90
    },
    timePassed: {
        type: Number,
        trim: true,
        require: true,
    },
    score: {
        type: Number,
        trim: true,
        require: true,
    },
    
    image: {
        type: String,
        trim: true,
        require: true,
    }
});

// virtual field

// userSchema.virtual('password')
// .set(function(password){
//     this._password = password
//     this.salt = uuidv1()
//     this.hashed_password = this.encryptPassword(password)
// })

// .get(function(){
//     return this._password
// })



// userSchema.methods = {
//     encryptPassword: function(password){
//         if(!password) return '';
//         try{
//             return crypto.createHmac('sha1', this.salt)
//                             .update(password)
//                             .digest('hex')
//         }catch (err){
//             return "";
//         }
//     }
// }

module.exports =  mongoose.model("Module", moduleSchema)