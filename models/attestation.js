const { text } = require('body-parser');
const mongoose = require('mongoose')
// const crypto = require('crypto')
// const uuidv1 = require('uuid');

const attesttionSchema = new mongoose.Schema({
    clientID: {
        type: String,
        trim: true,
        require: true,
    },
    serviceID:{
        type: String,
        require: true
    },
    panoram:{
        type: String,
        require: true
    },AS:{
        type: String,
        require: true
    },IS:{
        type: String,
        require: true
    },SN:{
        type: String,
        require: true
    },progress:{
        type: String,
        require: true
    },aveScore:{
        type: String,
        require: true
    }
    
}, {
    timestamps: true
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

module.exports =  mongoose.model("Attestation", attesttionSchema)