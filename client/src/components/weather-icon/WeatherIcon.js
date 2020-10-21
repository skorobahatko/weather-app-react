import React, {useEffect, useState} from "react";
import './WeatherIcon.css'

const WeatherIcon = (props) => {
    const {currentWeather} = props;
    const [weatherFromProps, changeWeather] = useState({});
    const nameOfWeather = weatherFromProps.weather;
    const currentTemperature = weatherFromProps.main;

    useEffect(() => {
        changeWeather(currentWeather);
    },[currentWeather]);

    const getCelsuis = (kelvin) => {
        kelvin = parseInt(kelvin);
        let celsius = kelvin - 273.15;
        return celsius.toFixed(1);
    };

    return(
    <div className='container container-main'>
        <div className='name-of-weather'>
            {nameOfWeather ?
                nameOfWeather.map(item => {
                 return item.main})
                : 'nul'}
        </div>
        <div className='container-of-temperature'>
            <p>temperature: {currentTemperature ? getCelsuis(currentTemperature.temp) : 'no'}</p>
        </div>
        <div className='footer'>

        </div>
    </div>
    )
};

export default WeatherIcon;
