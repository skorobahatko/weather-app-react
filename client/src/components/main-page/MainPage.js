import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import WeatherIcon from "../weather-icon/WeatherIcon";
import './MainPage.css';
import {currentWeatherFetch} from "../../actions/Actions";

const MainPage = (props) => {
    const { loadCurrentWeather, data, isLoading, error, location } = props;

    const [ currentWeather, changeCurrentWeather ] = useState ([]);

    // console.log (navigator.geolocation);
    //     console.log (props);

    useEffect(() => {
        fetch('http://localhost:9000/weather')
            .then(response => response.json())
            .then(response => changeCurrentWeather(response));
    }, []);

    return (
        <div className='container-of-main'>
            {/*{currentWeather}*/}
            {
                !error ?
                    !isLoading ?
                        <WeatherIcon currentWeather={currentWeather}/>
                        : <div>loading:)</div>
                    : error.toString()
            }
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
