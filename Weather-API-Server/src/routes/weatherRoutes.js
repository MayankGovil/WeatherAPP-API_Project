const express = require('express');
const router = express.Router();
const weatherController = require('../controllers/weatherController');

// Define the route for fetching weather data and attach the controller function
router.get('/weather', weatherController);

module.exports = router;
