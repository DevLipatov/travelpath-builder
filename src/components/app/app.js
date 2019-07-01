import React, {Component} from 'react';
import {Route, Switch} from "react-router-dom";
import NewPathPage from '../new-path-page/index';
import ReadyPathPage from '../ready-path-page/index';
import NavbarHeader from '../navbar-header/index';
import MyPathPage from '../my-path-page/index';
import CustomModal from "../custom-modal";

import './app.css';

export default class App extends Component {

    render() {
        return (
            <div>
                <CustomModal/>
                <NavbarHeader/>
                <Switch>
                    <Route path="/" exact component={NewPathPage}/>
                    <Route path="/ready" component={ReadyPathPage}/>
                    <Route path="/my" component={MyPathPage}/>
                </Switch>
            </div>
        )
    }
}