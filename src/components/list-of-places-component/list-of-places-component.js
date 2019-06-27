import React, {Component} from 'react';
import {connect} from 'react-redux';
import {compose} from "redux";
import {fullInfoLoaded} from "../../actions";
import {withDataService} from '../hoc';
import {CardColumns} from "react-bootstrap";
import ListOfPlacesItem from '../list-of-places-item';

import './list-of-places-component.css';

class ListOfPlacesComponent extends Component {

    componentDidMount() {
        const {dataService, fullInfoLoaded} = this.props;
        dataService.getFullInfo().then(
            (fullInfo) => fullInfoLoaded(fullInfo)
        );
    }

    render() {
        const {fullInfo} = this.props;

        const elements = fullInfo.map(
            (item) => {
                return (
                    <ListOfPlacesItem itemData={item} key={item.id}/>
                );
            }
        );
        return <CardColumns>{elements}</CardColumns>
    }
}

const mapStateToProps = ({fullInfo}) => {
    return {fullInfo}
};

const mapDispatchToProps = {fullInfoLoaded};

export default compose(
    withDataService(),
    connect(mapStateToProps, mapDispatchToProps)
)(ListOfPlacesComponent);