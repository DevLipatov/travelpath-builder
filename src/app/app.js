import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Route from "react-router-dom/es/Route";
import NewPathPage from '../new-path-page';
import ReadyPathPage from '../ready-path-page';
import NavbarHeader from '../navbar-header';
import MyPathPage from '../my-path-page';

import './app.css';

const App = () => {
    return (
        <div>
            <Router>
                <NavbarHeader/>
                <Route path="/new" component={NewPathPage}/>
                <Route path="/ready" component={ReadyPathPage}/>
                <Route path="/my" component={MyPathPage}/>
            </Router>
        </div>
    )
};

export default App;