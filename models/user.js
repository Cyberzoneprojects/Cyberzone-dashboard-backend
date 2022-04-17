const mongoose = require('mongoose')
const crypto = require('crypto')
const uuidv1 = require('uuid');

const userSchema = new mongoose.Schema({
    userID: {
        type: String,
        trim: true,
        require: true,
        index:{unique: true}
    },
    firstName: {
        type: String,
        trim: true,
        require: true,
        maxlength: 32
    },
    lastName: {
        type: String,
        trim: true,
        require: true,
        maxlength: 32
    },
    email: {
        type: String,
        trim: true,
        require: true
    },
    phone: {
        type: Number,
        trim: true,
        require: true,
    },
    country: {
        type: String,
        trim: true,
        require: true,
    },
    // status: {
    //     type: String,
    //     trim: true,
    //     require: true,
    // },
    image: {
        type: String,
        trim: true,
        require: true,
    },
    hashed_password: {
        type: String,
        require: true,
    }
}, {
    timestamps: true
});

// virtual field

userSchema.virtual('password')
.set(function(password){
    this._password = password
    this.salt = uuidv1()
    this.hashed_password = this.encryptPassword(password)
})

.get(function(){
    return this._password
})


userSchema.methods = {
    encryptPassword: function(password){
        if(!password) return '';
        try{
            return crypto.createHmac('sha1', this.salt)
                            .update(password)
                            .digest('hex')
        }catch (err){
            return "";
        }
    }
}

module.exports =  mongoose.model("User", userSchema)