const weatherService = require('../services/weather-service');

module.exports = {
    getCurrentWeather: async (req, res) => {
        console.log ('controller');
        try {
            let body = req.params.city;
            const getFromAPI = await weatherService.getCurrentWeatherService (body);
            res.json (getFromAPI);
        } catch (e) {
            console.log (e)
        }
    }
}
