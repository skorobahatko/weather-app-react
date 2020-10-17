import React, {useEffect, useState} from "react";
import WeatherIcon from "../weather-icon/WeatherIcon";
import './MainPage.css';

const MainPage = () => {
    const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

    const [ currentWeather, changeCurrentWeather ] = useState ([]);

    const getJson =  () => {
        try {
             fetch (`https://api.openweathermap.org/data/2.5/weather?q=Lviv&appid=${apiKey}`)
                .then (data => data.json ())
                .then (data => changeCurrentWeather(data))
                .catch (e => console.log (e));
        } catch (e) {
            console.log (e);
        }
    };
    useEffect (() => {
        getJson ();
    }, []);

    return (
        <div className='container-of-main'>
            <WeatherIcon currentWeathere={currentWeather}/>
        </div>
    )
};
export default MainPage;
