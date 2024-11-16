const express = require ('express');
const router = express.Router();
const {Signup,Login}=require('../Controllers/Signup');
const { Createuser,Getuser, Updateuser } = require('../Controllers/User');

router.post('/login',Login)
router.post('/signup',Signup)
router.post('/user',Createuser)
router.get('/read',Getuser)
router.put('/update',Updateuser)

module.exports = router;