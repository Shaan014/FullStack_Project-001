const path = require('path');
require('dotenv').config();
// console.log("JWT_SECRET in login.js:", process.env.JWT_SECRET);


const express = require('express');
const cors = require('cors');


const loginRoutes = require('./src/routes/login');
const accountRoutes = require('./src/routes/account');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/login', loginRoutes);
app.use('/api/account', accountRoutes);

// Basic route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the backend API' });
});


// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
}); 