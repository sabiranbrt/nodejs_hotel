const mongoose = require("mongoose");
require("dotenv").config();
// Define the MongoDB connection URL
const mongoURL = "mongodb://localhost:27017/hotels"; // Replace mydatabases with your database name
// const mongoURL = process.env.MONGODB_URL;

// set up MongoDB connection
mongoose.connect(mongoURL);

// Get the default connection
// Mongoose maintain a default connection object representing the MongoDB connection

const db = mongoose.connection;

//  Define event listners for database connection

db.on("connected", () => {
  console.log("Connected to MongoDB server");
});

db.on("error", (err) => {
  console.error("MongoDB connection error:", err);
});

db.on("disconnected", () => {
  console.log("MongoDB disconnected");
});

// Export the database connection
module.exports = db;
