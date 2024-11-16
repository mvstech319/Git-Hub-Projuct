const SignupModal = require('../models/Signup');

// Signup API
const Signup = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // You should hash the password before saving it
        const NewUser = new SignupModal({
            name,
            email,
            password // Insecure: should use a hashed version
        });

        await NewUser.save();
        res.status(200).json({
            success: true,
            message: 'User created successfully',
            NewUser
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
};

// Login API
const Login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await SignupModal.findOne({ email: email });
        
        if (user) {
            // Password check (should be done using bcrypt.compare)
            if (user.password === password) {
                res.json('Success');
            } else {
                res.json('The password is incorrect');
            }
        } else {
            res.json('No record found');
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
};

module.exports = { Signup, Login };
