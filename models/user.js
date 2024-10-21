const mongoose = require('mongoose');
const validator = require('validator');

// Create Mongoose Schema with validation rules
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
    minlength: [3, 'Name must be at least 3 characters long.'],
    maxlength: [30, 'Name must be less than 30 characters long.'],
    validate: {
      validator: function(value) {
        return /^[a-zA-Z\s]+$/.test(value); // Allows alphabetic characters and spaces
      },
      message: 'Name must contain only alphabetic characters.'
    }
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
    validate: {
      validator: function(value) {
        return /^\d{10}$/.test(value); // Ensures phone number has exactly 10 digits
      },
      message: 'Phone number must be exactly 10 digits.'
    }
  },
  terms: {
    type: Boolean,
    required: [true, 'You must agree to the Terms and Conditions.'],
    default: false
  }
});

// Compile model
const User = mongoose.model('User', userSchema);

module.exports = User;
