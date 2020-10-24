import React from 'react';
import {
    BrowserRouter as Router, Switch, Route, Link
} from 'react-router-dom';
import {Provider} from 'react-redux';
import MainPage from "./components/main-page/MainPage";
import configStore from "./redux-store/Store";
import CityChoosingPage from "./components/city-choosing-page/CityChoosingPage";

const store = configStore();

function App() {
    return (
        <Provider store={store}>
            <Router>
                <Switch>
                    {/*<Route path='/'>*/}
                    {/*    <CityChoosingPage/>*/}
                    {/*</Route>*/}
                    <Route path='/weather/choose_city' render={(routerProps) => {
                        return(
                            <CityChoosingPage {...routerProps}/>
                        )
                    }}>
                    </Route>
                    <Route path='/weather/current_weather/:city' render={(routerProps) => {
                        return (
                            <MainPage {...routerProps}/>
                        )
                    }}>
                    </Route>

                </Switch>
            </Router>
        </Provider>);
}

export default App;
