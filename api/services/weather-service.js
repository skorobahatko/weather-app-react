const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
const fetch = require ('node-fetch');
module.exports = {
    getCurrentWeatherService: async () => {
        let result = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=Lviv&appid=${apiKey}`)
            .then(response => response.json())
            .then(response => response)
            .catch(e => console.log(e));
        return result
    }
};
