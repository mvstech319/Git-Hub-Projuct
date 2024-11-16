const express = require('express')
const router = express.Router();
//controlers ko reqire kiya gy
const{Createuser,Getuser,Updateuser,DeleteUser}=require('../controllers/controller');

//route difine kiya gya

    router.post('/create',Createuser)
    router.get('/read',Getuser)
    router.put('/update/:id',Updateuser)
    router.delete("/delete/:id",DeleteUser)

    module.exports = router;//export kiya gya