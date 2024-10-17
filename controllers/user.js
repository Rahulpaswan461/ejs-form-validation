const { validationResult } = require('express-validator');
const User = require('../models/user');

async function submitInformation(req, res) {
    try {
    
        const errorInfo = validationResult(req)
        
        if(!errorInfo.isEmpty()){
            return res.render("form",{
                err:errorInfo.array()
            })
        }

        // Destructure sanitized form data
        const { name, email, phone } = req.body;
        
        // Save the sanitized user data to MongoDB
        const newUser = new User({
            name,
            email,
            phone,
            terms: true
        });
        await newUser.save();

        // On success, render success message
        return res.status(200).json( { message: 'Form submitted successfully!' });
        

    } catch (error) {
        console.error('There is some error:', error);
        return res.status(500).json({ error: error.message });
    }
}

async function getAllusers(req,res){
    try{
        const user = await User.find({})
        if(!user){
            return res.status(400).json({error:"No user is present !!"})
        }

        return res.status(200).json(user)
    }
    catch(error){
        console.log("There is some error",error.message)
        return res.status(500).json({error: error.message})
    }
}

module.exports = {
    submitInformation,
    getAllusers
};
