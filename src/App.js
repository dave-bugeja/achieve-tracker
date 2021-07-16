import React from 'react';
import { Switch, Route } from "react-router-dom";
import Header from './components/Header.js';
import Home from './components/Home.js';
import Profile from './components/Profile.js';

function App() {

    return (
        <div className="container">
            <Header />
            <Switch>
                <Route path="/profile/:paramUserId">
                    <Profile />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </div>
    )

}

export default App;
