// const {body} = require("express-validator")

// const validateForm = [
//     body('name')
//         .trim()
//         .isLength({ min: 3, max: 30 })
//         .withMessage('Name must be between 3 and 30 characters.')
//         .isAlpha('en-US', { ignore: ' ' })
//         .withMessage('Name must contain only alphabetic characters.')
//         .escape(),
    
//     body('email')
//         .trim()
//         .isEmail()
//         .withMessage('Invalid email address.')
//         .normalizeEmail(),

//     body('phone')
//         .trim()
//         .customSanitizer(value => value.replace(/\D/g, ''))  // Strip non-numeric characters
//         .isNumeric()
//         .withMessage('Phone number must contain only numbers.')
//         .isLength({ min: 10, max: 10 })
//         .withMessage('Phone number must be exactly 10 digits.'),

//     body('terms')
//         .equals('on')
//         .withMessage('You must agree to the Terms and Conditions.')
// ];

// module.exports = validateForm