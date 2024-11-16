const mongoose = require('mongoose')

const SignupSchema = new mongoose.Schema({
    name : String,
    email : String,
    password : String
})

const SignupModel = mongoose.model('Signup-data', SignupSchema);
module.exports = SignupModel;