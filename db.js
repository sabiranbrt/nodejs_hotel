const mongoose = require("mongoose");
require("dotenv").config();
// Define the MongoDB connection URL
// const mongo_LOCAL_URL = process.env.MONGODB_LOCAL_URL; // Replace mydatabases with your database name
const mongoURL = process.env.MONGOD_URL;

if (!mongoURL) {
  throw new Error("MONGODB_URI is not defined in the environment variables.");
}

// set up MongoDB connection
mongoose.connect(mongoURL, {
  useNewUrlPraser: true,
  useUnifiedTopology: true,
});

// Get the default connection
// Mongoose maintain a default connection object representing the MongoDB connection

const db = mongoose.connection;

//  Define event listners for database connection

db.on("connected", () => {
  console.log("Connected to MongoDB server");
});

db.on("error", (err) => {
  console.error("MOngoDB connection error:", err);
});

db.on("disconnected", () => {
  console.log("MongoDB disconnected");
});

// Export the database connection
module.exports = db;
