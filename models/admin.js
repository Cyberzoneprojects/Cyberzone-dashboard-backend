const mongoose = require('mongoose')
const crypto = require('crypto')
const uuidv1 = require('uuid');
const { builtinModules } = require('module');

const adminSchema = new mongoose.Schema({
    
    adminID: {
        type: String,
        trim: true,
        require: true,
        unique: true
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
        require: true,
    },
    phone: {
        type: Number,
        trim: true,
        require: true,
    },
    location: {
        type: String,
        trim: true,
        require: true,
    },
    designation: {
        type: String,
        trim: true,
        require: true,
    },
    address: {
        type: String,
        trim: true,
        require: true,
    },
    biography: {
        type: String,
        trim: true,
        require: true,
    },
    skills: {
        type: String,
        trim: true,
        require: true,
    },
    education: {
        type: String,
        trim: true,
        require: true,
    },
    experience: {
        type: String,
        trim: true,
        require: true,
    },
    subjects: {
        type: String,
        trim: true,
        require: true,
    },
    hashed_password: {
        type: String,
        require: true,
    },
    salt: String,
    role: {
        type: Number,
        default: 0
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

module.exports =  mongoose.model("Admin", adminSchema)