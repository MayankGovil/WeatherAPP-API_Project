const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Import all routes.
const allRoutes = require('./src/app');

// Middleware to parse JSON bodies.
app.use(express.json());


// Middleware to enable CORS.
app.use(cors());

// Define the port from environment variables or set the default port 5000.
const port = process.env.PORT || 5000;


// Use all imported routes.
app.use(allRoutes);


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
