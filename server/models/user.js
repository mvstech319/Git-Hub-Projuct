const mongoose = require('mongoose')

const userSchema= new mongoose.Schema({
    name:'string',
    email:'string',
    password:'string'
},{timestamps:true});

const UserModels= mongoose.model("user",userSchema);

module.exports = UserModels;