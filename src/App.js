import React from 'react';
import {
    BrowserRouter as Router, Switch, Route, Link
} from 'react-router-dom';
import {Provider} from 'react-redux';
import MainPage from "./components/main-page/MainPage";
import configStore from "./redux-store/Store";

const store = configStore();

function App() {
    return (
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route path='/'>
                        <MainPage/>
                    </Route>
                </Switch>
            </Router>
        </Provider>);
}

export default App;
