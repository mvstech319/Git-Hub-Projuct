const UserModels = require('../models/user')
// controlers ko define kiya gya
const Createuser = async (req, res) => {
    try {
        const { name, email, password } = req.body

        const NewUser = new UserModels({
            name, email, password
        })
        await NewUser.save()
        res.status(200).json({
            success: true, massege: 'user created successfully',
            NewUser
        })
    }
    catch (error) {
        console.log(error)
        res.status(500).json({
            success: false, massege: 'internal server error',
            NewUser
        })
    }
}

//read api
const Getuser = async(req, res) => {
    try{
        const user= await UserModels.find()
        if(!user){
            return res.status(404).json({success:false,massage:'user not found'})
        }
        return res.status(200).json({success:true,user})
    }
    catch(error){
        console.log(error)
        return res.status(500).json({success:false,massage:'internal server error'})
    }
}

//update api
const Updateuser = async(req,res)=>{
    try{
       const userId=req.params.id
        const updatedUser=await UserModels.findByIdAndUpdate(userId,req.body,{new:true})

        if(!updatedUser){
            return res.status(404).json({success:false,message:'user not found'})
            
        }
        res.status(200).json({success:true,message:"user updated successfully",updatedUser})
    }
    catch(error){
            console.log(error)
            return res.status(500).json({success:false,message:'internal server error'})
    }
}

// Delete api
const DeleteUser= async(req, res)=>{
    try{
        const userId=req.params.id
        const deletedUser=await UserModels.findByIdAndDelete(userId)
        if(!deletedUser){
            return res.status(404).json({success:false,message:'user not found'})
        }
        return res.status(200).json({success:true,message:'user deleted successfuly'})
    }
    catch(error){
        console.log(error)
        return res.status(500).json({success:false,message:'internal server error'})
    }


}


module.exports = { Createuser,Getuser,Updateuser,DeleteUser}; //export kiya gya