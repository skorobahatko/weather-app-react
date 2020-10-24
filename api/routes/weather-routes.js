const express = require('express');
const router = express.Router();
const weatherController = require('../controllers/weather-controller');

router.get('/current_weather/:city', weatherController.getCurrentWeather);
module.exports = router;
