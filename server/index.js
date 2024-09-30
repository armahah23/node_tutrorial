const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./models/user"); // Use capital `User` for model
const user = require("./models/user");
const api = express();

// Enable CORS
api.use(cors());

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/test", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

// Route: Homepage
api.get("/", (req, res) => {
  user.find({}, (err, users) => {
    err? res.json(err) : res.json(users);
  })
});

// Route: Create user
api.get("/create", async (req, res) => {
    if (req.quert) {
        const user1 = user.query;
    try {
    const newUser = await User.create({ user1 });
    res.json(newUser);
  } catch (err) {
    res.json(err);
  }    
    } else {
        console.log("no query");
    }
});

// Route: Login (get query params)
api.get("/login", (req, res) => {
    if (req.query) {
       const userData = req.query; // Avoid name conflict with `User` model
  res.json(userData); 
    } else {
        console.log("no query");
    }
  
});

// Start the server
api.listen(3000, () => {
  console.log("Server running on port 3000");
});
