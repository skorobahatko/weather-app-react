import {CURRENT_WEATHER_DATA, IS_CURRENT_WEATHER_LOADING, CURRENT_WEATHER_HAS_ERROR} from "../actions/Actions";
import {defaultStoreData} from "./Reducers";

export function currentWeatherReducer (state = defaultStoreData.currentWeather, action) {
    const newState = {...state};
    switch (action.type) {
        case CURRENT_WEATHER_DATA : {
            newState.data = action.payload;

            return newState;
        }
        case IS_CURRENT_WEATHER_LOADING: {
            newState.isLoading = action.payload;

            return newState;
        }
        case CURRENT_WEATHER_HAS_ERROR: {
            newState.error = action.payload;

            return newState;
        }
        default: return newState
    }
};
