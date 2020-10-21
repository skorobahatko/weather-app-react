import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import WeatherIcon from "../weather-icon/WeatherIcon";
import './MainPage.css';
import {currentWeatherFetch} from "../../actions/Actions";

const MainPage = (props) => {
    const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
    const { loadCurrentWeather, data, isLoading, error, location } = props;

    const [ currentWeather, changeCurrentWeather ] = useState ([]);

    // const getJson =  () => {
    //     try {
    //          fetch (`https://api.openweathermap.org/data/2.5/weather?q=Lviv&appid=${apiKey}`)
    //             .then (data => data.json ())
    //             .then (data => changeCurrentWeather(data))
    //             .catch (e => console.log (e));
    //     } catch (e) {
    //         console.log (e);
    //     }
    // };
    // useEffect (() => {
    //     loadCurrentWeather (`https://api.openweathermap.org/data/2.5/weather?q=Lviv&appid=${apiKey}`)
    // }, []);
    // console.log (navigator.geolocation);
    //     console.log (props);
    useEffect(() => {
        fetch('http://localhost:9000/newroute')
            .then(response => response.text())
            .then(response => changeCurrentWeather(response));
    }, []);
    return (
        <div className='container-of-main'>
            {currentWeather}
            {/*{*/}
            {/*    !error ?*/}
            {/*        !isLoading ?*/}
            {/*            <WeatherIcon currentWeather={data}/>*/}
            {/*            : <div>loading:)</div>*/}
            {/*        : error.toString()*/}
            {/*}*/}
        </div>)
};

const mapStateToProps = (state) => {
    console.log (state)
    const { data, isLoading, error } = state;
    // console.log (data, isLoading, error)
    return {
        data,
        isLoading,
        error
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadCurrentWeather: (url) => dispatch (currentWeatherFetch (url))
    }
};

export default connect (mapStateToProps, mapDispatchToProps) (MainPage);
