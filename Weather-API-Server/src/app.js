
const express = require('express');

const allRoutes = express.Router();

// Import routes
const weatherRoutes = require('../src/routes/weatherRoutes');


// Routes
allRoutes.use('/', weatherRoutes);

module.exports = allRoutes;
