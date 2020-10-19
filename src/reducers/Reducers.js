import {currentWeatherReducer} from "./CurrentWeatherReducer";

export const defaultStoreData = {
    currentWeather: {
        isLoading: false,
        error: '',
        data: {}
    }
};


export const createRootReducer = () => {
    return currentWeatherReducer
};

