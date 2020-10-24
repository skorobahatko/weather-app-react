import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import WeatherIcon from "../weather-icon/WeatherIcon";
import './MainPage.css';
import {currentWeatherFetch} from "../../actions/Actions";

const MainPage = (props) => {
    const { loadCurrentWeather, data, isLoading, error, location, params } = props;

    const isSearchSame = (oldData, newData) => {
        let oldNameOfCity = oldData.name.toLowerCase();
        newData = newData.toLowerCase();
        if (oldNameOfCity === newData) {
            return false
        } else {
            return true
        }
    };

    useEffect(() => {
        const city = props.match.params.city;
        if (city) {
            loadCurrentWeather (city);
        }
    }, []);

    return (
        <div className='container-of-main'>
            {
                !error ?
                    !isLoading ?
                        <WeatherIcon currentWeather={data}/>
                        : <div>loading:)</div>
                    : error.toString()
            }
        </div>)
};

const mapStateToProps = (state) => {
    const { data, isLoading, error } = state;
    return {
        data,
        isLoading,
        error
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadCurrentWeather: (city) => dispatch (currentWeatherFetch (city))
    }
};

export default connect (mapStateToProps, mapDispatchToProps) (MainPage);
