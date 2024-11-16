require("dotenv").config();
const express = require ('express')
const app = express();
const cors = require('cors');
//database ko require kiya hai
const connectDB = require ('./Database/connect')

//midelwear
app.use(cors());
app.use(express.json())
// app.use(cors())
// route ki file ko require kiya gya
const router = require ('./Router/Router')



// middlewear ko use kiya gya for  for set route
app.use('/api',router)


// server ko start kiya gya
const start =async()=>{
    try{
        await connectDB();//connectDB function kouse kiya hai
        app.listen(process.env.PORT,()=>{
           console.log('server is connected');
        });
    }
    catch (error){
        console.log(error);
    }
}

start();