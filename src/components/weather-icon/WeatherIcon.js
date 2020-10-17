import React, {useEffect, useState} from "react";
import './WeatherIcon.css'

const WeatherIcon = (props) => {
    const {currentWeathere} = props;
    const [weatherFromProps, changeWeather] = useState({});

    useEffect(() => {
        changeWeather(currentWeathere);
    },[currentWeathere]);

    const nameOfWeather = weatherFromProps.weather;
    return(
    <div className='container container-main'>
        <div className='name-of-weather'>
            {nameOfWeather ?
                nameOfWeather.map(item => {
                 return item.main})
                : 'nul'}
        </div>
        <div className='container-of-temperature'>
            <p>temperature: {weatherFromProps ? 'yes' : 'no'}</p>
        </div>
        <div className='footer'>

        </div>
    </div>
    )
};

export default WeatherIcon;
