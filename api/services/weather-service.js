const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
const fetch = require ('node-fetch');
module.exports = {
    getCurrentWeatherService: async (body) => {
            let result = await fetch (`http://api.openweathermap.org/data/2.5/weather?q=${body}&lang=ua&units=metric&appid=${apiKey}`)
                .then (response => response.json ())
                .catch (e => console.log (e));
        console.log (result);
        return result
    }
};
