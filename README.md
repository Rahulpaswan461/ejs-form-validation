# Form Validation with Node.js, Express, and MongoDB

This project is a simple Node.js and Express application that implements server-side form validation and sanitization using Express Validator. The form captures user details such as name, email, phone number, and terms and conditions agreement, and then stores the data 
in MongoDB Atlas using the MVC (Model-View-Controller) pattern.


## Features
- Form with fields for Name, Email, Phone Number, and a Terms & Conditions checkbox.
- Validation and sanitization of form inputs using Express Validator.
- Input values are validated for specific criteria:
- Name: Only alphabets, 3-30 characters.
- Email: Should be a valid email format.
- Phone: Should be a 10-digit numeric value.
- Terms & Conditions: Must be checked.
- Errors are displayed back to the user on the form if validation fails.
- Data is sanitized to remove any unwanted HTML tags.
- User data is stored in MongoDB Atlas after successful validation.
- Follows the MVC architecture pattern.

## Tech Stack
- Node.js
- Express.js
- EJS (Embedded JavaScript templating)
- MongoDB Atlas (NoSQL Database)
- Express Validator (For validation and sanitization)

## Prerequisites
- Node.js installed
- MongoDB Atlas account (for cloud database)

## Installation
1. Clone the repository:
  -  git clone https://github.com/Rahulpaswan461/ejs-form-validation
2. Navigate into the project directory:
   - cd ejs-form-validation
3. Install the dependencies:
  - npm install

4. Set up MongoDB Atlas:
   - Create a MongoDB Atlas account if you don't have one.
   - Create a new cluster and a database named usersDB (or update the connection string accordingly).
   - Update the MongoDB connection string in your project’s .env file.

5. Create a .env file in the root directory and add the following environment variable (update <your-mongodb-connection-string>):
    MONGO_URL=<your-mongodb-connection-string>

 ## Usage
  1. start the server - node index.js
  2. Open your browser and navigate to http://localhost:8000/api/user/submit to view the form.
  3. Fill out the form and submit to see validation and sanitization in action.
  4.To fetch all users, go to: http://localhost:8000/api/user/get-users.

## Routes
1.GET /api/user/submit
 - Renders the form page with no errors on the initial load.

2. POST /api/user/submit
 - Handles the form submission and validates user input using the middleware validateForm.

3.GET /api/user/get-users
 - Fetches and returns all users from the MongoDB database.

