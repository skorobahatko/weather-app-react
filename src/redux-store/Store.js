import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
// import {createRootReducer} from "../reducers/Reducers";
import {currentWeatherReducer} from "../reducers/CurrentWeatherReducer";
import {composeWithDevTools} from "redux-devtools-extension";

const configStore = () => {
    return createStore(
        currentWeatherReducer,
        composeWithDevTools(applyMiddleware(thunk))
    )
};

export default configStore;
