const Usermodel = require('../models/users')
const Createuser = async (req, res) => {
    try {
        const { name, email, dob, mobile, landmark, address } = req.body;
        const NewUser = new Usermodel({
            name,
            email,
            dob,
            mobile,
            landmark,
            address
        });
        await NewUser.save();
        res.status(200).json({
            success: true, massege: 'User created successfully', NewUser
        })

    } catch (error) {
        console.log(error)
    }

}

//read api
const Getuser = async(req, res) => {
    try{
        const user= await Usermodel.find()
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


const Updateuser = async (req, res) => {
    try {
        const { id } = req.params; // Get the user ID from the request parameters
        const updatedData = req.body; // Get the new data from the request body

        // Find the user by ID and update with the new data
        const updateduser = await Usermodel.findByIdAndUpdate(id, updatedData, {
            new: true, // Return the updated document
            runValidators: true // Ensure the update follows schema validation
        });

        // Check if the user was found and updated
        if (!updateduser) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }

        // Return the updated user data
        return res.status(200).json({ success: true, message: 'User updated successfully', user: updatedUser });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, message: 'Internal server error' });
    }
};




module.exports={Createuser,Getuser,Updateuser}

