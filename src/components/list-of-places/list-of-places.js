import React, {Component} from 'react';
import {connect} from 'react-redux';
import {compose} from "redux";
import {fullInfoLoaded, loadingError} from "../../actions";
import {withDataService} from '../hoc';
import {CardColumns} from "react-bootstrap";
import ListOfPlacesItem from '../list-of-places-item';
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

import './list-of-places.css';

const ListOfPlaces = ({info}) => {
    const elements = info.map(
        (item) => {
            return (
                <ListOfPlacesItem itemData={item} key={item.id}/>
            );
        }
    );
    return <CardColumns>{elements}</CardColumns>
};

class ListOfPlacesContainer extends Component {

    componentDidMount() {
        this.props.fetchFullInfo();
    }

    render() {
        const {fullInfo, listOfPlacesLoading, error, shownCategory} = this.props;

        if (listOfPlacesLoading) {
            return <Spinner/>
        }

        if (error) {
            return <ErrorIndicator/>
        }

        const filterInfo = (info) => {
            if (shownCategory !== "All") {
                return info.filter((el) => el.category === shownCategory)
            }
            return info
        };

        return <ListOfPlaces info={filterInfo(fullInfo)}/>
    }
}

const mapStateToProps = ({fullInfo, listOfPlacesLoading, error, shownCategory}) => {
    return {fullInfo, listOfPlacesLoading, error, shownCategory}
};

const mapDispatchToProps = (dispatch, ownProps) => {
    const {dataService} = ownProps;
    return {
        fetchFullInfo: () => {
            dataService.getFullInfo()
                .then((fullInfo) => dispatch(fullInfoLoaded(fullInfo)))
                .catch((error) => dispatch(loadingError(error)));
        }
    }
};

export default compose(
    withDataService(),
    connect(mapStateToProps, mapDispatchToProps)
)(ListOfPlacesContainer);