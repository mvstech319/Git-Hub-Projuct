const mongoose = require('mongoose');

//database se connect kiya hai
const connectDB =async()=>{
    try{
    mongoose.connect(process.env.MONGO_URL);
    console.log('mongo is connected')
    }
    catch(error){
        console.log('mongodb connection error')
    }
};

module.exports = connectDB;