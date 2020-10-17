import React, {useEffect, useState} from "react";

const MainPage = () => {
    const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
    console.log (apiKey);

    const [currentWeather, changeCurrentWeater] = useState({});

    const getJson = () => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=Lviv&appid=${apiKey}`)
            .then(data => data.json())
            .then(data => changeCurrentWeater(data))
            .catch(e => console.log(e));
    };
    useEffect(() => {
        getJson();
    },[]);
    // getJson();

    return (
        <div>
            {JSON.stringify(currentWeather)}
        </div>
    )
};
export default MainPage;
