import {batch} from 'react-redux';

export const CURRENT_WEATHER_DATA = 'CURRENT_WEATHER_DATA';
export const IS_CURRENT_WEATHER_LOADING = 'IS_CURRENT_WEATHER_LOADING';
export const CURRENT_WEATHER_HAS_ERROR = 'CURRENT_WEATHER_HAS_ERROR';

export const currentWeatherData = (items) => {
    return {
        type: CURRENT_WEATHER_DATA,
        payload: items
    }
};
export const isCurrentWeatherLoading = (boolean) => {
    return {
        type: IS_CURRENT_WEATHER_LOADING,
        payload: boolean
    }
};
export const isCurrentWeatherHasError = (status) => {
    return {
        type: CURRENT_WEATHER_HAS_ERROR,
        payload: status
    }
};

export const currentWeatherFetch = (city) => {
    return (dispatch) => {
        dispatch(isCurrentWeatherLoading(true));
        fetch(`http://localhost:9000/weather/current_weather/${city}`)
            .then((response) => {
                if (!response.ok) {
                    throw Error (response.status)
                }
                return response;
            })
            .then(response => response.json())
            .then((items) => {
                console.log (items)
                batch(() => {
                    dispatch(currentWeatherData(items));
                    dispatch(isCurrentWeatherLoading(false))
                })
            })
            .catch(e =>  {
                dispatch(isCurrentWeatherHasError(e));
            })
    }
};
