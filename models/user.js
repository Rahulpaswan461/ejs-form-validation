const mongoose = require('mongoose');
const validator = require('validator');

// Create Mongoose Schema with basic validation rules
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
    minlength: [3, 'Name must be at least 3 characters long.'],
    maxlength: [30, 'Name must be less than 30 characters long.'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    lowercase: true,
    validate: [validator.isEmail, 'Invalid email address.']  // Use validator's isEmail
  },
  phone: {
    type: String,
    required: [true, 'Phone number is required'],
    trim: true,
  },
  terms: {
    type: Boolean,
    required: [true, 'You must agree to the Terms and Conditions.'],
    default: false
  }
});

// Pre-save hook to add custom validation logic before saving the document
userSchema.pre('save', function (next) {
  const user = this;

  // Custom validation for the name field to contain only alphabetic characters and spaces
  const nameRegex = /^[a-zA-Z\s]+$/;
  if (!nameRegex.test(user.name)) {
    const error = new Error('Name must contain only alphabetic characters.');
    return next(error);
  }

  // Custom validation for the phone number to ensure exactly 10 digits
  const phoneRegex = /^\d{10}$/;
  if (!phoneRegex.test(user.phone)) {
    const error = new Error('Phone number must be exactly 10 digits.');
    return next(error);
  }

  // Ensure terms and conditions are agreed upon (true)
  if (user.terms !== true) {
    const error = new Error('You must agree to the Terms and Conditions.');
    return next(error);
  }

  // If all validations pass, move to the next middleware or save
  next();
});

// Compile the model
const User = mongoose.model('User', userSchema);

module.exports = User;
