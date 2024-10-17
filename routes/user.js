const express = require("express");
const { submitInformation, getAllusers } = require("../controllers/user");
const validateForm = require("../middleware/validateForm");

const router = express.Router();

// Render the form page with an empty error array
router.get("/submit", (req, res) => {
    return res.render("form", { err: [] });
});

// Handle form submission with validation middleware
router.post("/submit", validateForm, submitInformation);

// Fetch and return all users
router.get("/get-users", getAllusers);

module.exports = router;
