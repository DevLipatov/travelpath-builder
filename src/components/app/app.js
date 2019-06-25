import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {Route, Switch} from "react-router-dom";
import NewPathPage from '../new-path-page/index';
import ReadyPathPage from '../ready-path-page/index';
import NavbarHeader from '../navbar-header/index';
import MyPathPage from '../my-path-page/index';

import './app.css';

const App = () => {
    return (
        <Router>
            <NavbarHeader/>
            <Switch>
                <Route path="/" exact component={NewPathPage}/>
                <Route path="/ready" component={ReadyPathPage}/>
                <Route path="/my" component={MyPathPage}/>
            </Switch>
        </Router>
    )
};

export default App;