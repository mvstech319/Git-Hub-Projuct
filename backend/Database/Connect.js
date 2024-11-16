const mongoose =require('mongoose')

const connectDB = async()=>{
    try {
        mongoose.connect(process.env.MONGO_URI)
        console.log('mongo is connected')
    } catch (error) {
        console.log("mongo connection error") 
    }
}

module.exports = connectDB;