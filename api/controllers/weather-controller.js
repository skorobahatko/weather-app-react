const weatherService = require('../services/weather-service');

module.exports = {
    getCurrentWeather: async (req, res) => {
        try {
            const getFromAPI = await weatherService.getCurrentWeatherService ();
            res.send (getFromAPI);
        } catch (e) {
            console.log (e)
        }
    }
}
