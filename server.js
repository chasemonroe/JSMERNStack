const express = require('express');
const connectDB = require('./config/db');

// Initialize app variable with express 
const app = express();

// Connect Database 
connectDB();

// Init Middleware 
app.use(express.json({extended: false}));

app.get('/', (req, res) => res.send('API Running'));

// Define Routes 
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));


// Look for environment variable called 'Port' 
// If there is no environment variable set run on port 5000
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));