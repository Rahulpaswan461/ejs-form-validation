require("dotenv").config();  // Load environment variables from .env file

const express = require("express");
const { connectMongoDB } = require("./connection");
const userRoute = require("./routes/user");
const path = require("node:path");

const app = express();
const PORT = process.env.PORT || 8000;

// Connect to MongoDB and handle connection status
connectMongoDB(process.env.MONGO_URL)
    .then(() => console.log("MongoDB is connected successfully !!"))
    .catch(error => console.log("Error while connecting to MongoDB:", error));

// Middleware to parse URL-encoded data
app.use(express.urlencoded({ extended: false }));

// Set EJS as the view engine and configure views folder
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Root route to check server status
app.get("/", (req, res) => {
    return res.send("From the server");
});

// User routes
app.use("/api/user", userRoute);

// Start the server and listen on the defined port
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} !!`);
});
