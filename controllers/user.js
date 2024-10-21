const { validationResult } = require('express-validator');
const User = require('../models/user');

async function submitInformation(req, res) {
    try {
    
        // Destructure sanitized form data
        const {name, email, phone, terms} = req.body
        if (terms !== 'on') {
            return res.status(400).json({ error: 'You must agree to the Terms and Conditions.' });
          }

        const user = new User({
            name: name,
            email: email,
            phone: phone,
            terms: true
        })

        await user.save();

        if(!user){
            return res.stauts(400).json({error:"No user created !!"})
        }

        return res.status(200).json({success:"user created successfully !!!"})

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
