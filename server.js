const express = require('express');

// Initialize app variable with express 
const app = express();

app.get('/', (req, res) => res.send('API Running'));

// Look for environment variable called 'Port' 
// If there is no environment variable set run on port 5000
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
