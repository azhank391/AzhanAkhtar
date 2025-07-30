const express = require('express');
require('dotenv').config();
const db = require('./models'); // Import the database models
const Contact = db.Contact; // Import the Contact model
const serverless = require('serverless-http'); // Import serverless-http for serverless deployment
const cors = require('cors');
const allowedOrigins = ['http://localhost:5173', 'https://azhan-akhtar.vercel.app'];
 // Enable CORS for specified origins
const app = express();
app.use(express.json());
app.use(cors({ origin: allowedOrigins,
    methods:['GET','POST','PUT','DELETE'],
    allowedHeaders:['Content-Type'],
    credentials: true
 }));
app.options('*', cors()); // allow preflight

// Add health check endpoint
app.get('/api/health', async (req, res) => {
  try {
    await db.sequelize.authenticate();
    res.json({ status: 'OK', message: 'Database connection successful' });
  } catch (error) {
    console.error('Database connection error:', error);
    res.status(500).json({ status: 'ERROR', message: 'Database connection failed' });
  }
});

app.post('/api/contact',async (req, res) => {
    try {
        const {name,email,message} = req.body;
        if (!name || !email || !message) {
            return res.status(400).json({error: 'All fields are required'});
        }
    const contact = await Contact.create({name,email,message});
        return res.status(201).json(contact);
    } catch (error) {
        console.error('Contact creation error:', error);
        res.status(500).json({error: 'An error occurred while saving the contact'});
        
    
}});
const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });

app.get('/',async (req,res)=> {
    try {
    await db.sequelize.authenticate();
    res.send('✅ Connected to DB successfully');
  } catch (err) {
    console.error('❌ DB connection failed:', err);
    res.status(500).send('DB connection error');
  }
})
//vercel serverless export
module.exports.handler = serverless(app); // Export the app for serverless deployment