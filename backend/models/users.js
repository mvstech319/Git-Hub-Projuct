const mongoose = require('mongoose')

const UserSchema = new
    mongoose.Schema({
        name: {
            type: String,
            required: true,
        },
        dob: {
            type: String,
            required:true,

        },
        mobile:{
            type:Number,
            required:true
        },
        email: {
            type: String,
            required: true,
        },
        landmark: {
            type: String,
            required: true,
        },
        address: {
            type: String,
            required: true,
        },
    });


const Usermodel = mongoose.model('user-data', UserSchema);
module.exports=Usermodel;