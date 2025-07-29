const express = require('express');
require('dotenv').config();
const db = require('./models'); // Import the database models
const Contact = db.Contact; // Import the Contact model
const cors = require('cors');
const allowedOrigins = ['http://localhost:5173',];
 // Enable CORS for specified origins
const app = express();
app.use(express.json());
app.use(cors({ origin: allowedOrigins }));

app.post('/contact',async (req, res) => {
    try {
        const {name,email,message} = req.body;
        if (!name || !email || !message) {
            return res.status(400).json({error: 'All fields are required'});
        }
    const contact = await Contact.create({name,email,message});
        return res.status(201).json(contact);
    } catch (error) {
        res.status(500).json({error: 'An error occurred while saving the contact'});
        
    
}});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});