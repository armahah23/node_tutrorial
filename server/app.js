const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors());

// MongoDB connection (using Mongoose)
mongoose.connect('mongodb://localhost:27017/autocare', { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
})
.then(() => console.log("Connected to MongoDB"))
.catch((error) => console.error("Failed to connect to MongoDB", error));

// User model (schema)
const UserSchema = new mongoose.Schema({
    username: { type: String, required: true },  // Added required fields for validation
    password: { type: String, required: true }
});
const User = mongoose.model('User', UserSchema);

// Sign up route
app.post('/signup', async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = new User({ username, password });
        await user.save();
        res.status(201).send({ message: 'User created successfully' });
    } catch (error) {
        console.error("Error creating user:", error); // Log the error for debugging
        res.status(500).send({ error: 'Failed to create user' });
    }
});

// Start the server
app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
