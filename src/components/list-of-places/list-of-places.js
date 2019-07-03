import React, {Component} from 'react';
import {connect} from 'react-redux';
import {compose} from "redux";
import {CardColumns} from "react-bootstrap";
import {shortInfoLoaded, shortInfoLoadedError} from "../../actions";
import {withDataService} from '../hoc';
import CustomSpinner from "../custom-spinner";
import ErrorIndicator from "../error-indicator";
import ShortInfoCard from '../short-info-card';

import './list-of-places.css';

const ListOfPlaces = ({info}) => {
    const elements = info.map(
        (item) => {
            return (
                <ShortInfoCard data={item} key={item.id}/>
            );
        }
    );
    return <CardColumns>{elements} {elements} {elements}</CardColumns>
};

class ListOfPlacesContainer extends Component {

    render() {
        const {
            shortInfo,
            shortInfoLoading,
            shortInfoError,
            shownCategory
        } = this.props;

        if (shortInfoLoading) {
            return <CustomSpinner/>
        }

        if (shortInfoError) {
            return <ErrorIndicator/>
        }

        const filterInfo = (info) => {
            if (shownCategory !== "All") {
                return info.filter((el) => el.category === shownCategory)
            }
            return info
        };

        return <ListOfPlaces info={filterInfo(shortInfo)}/>
    }
}

const mapStateToProps = ({shortInfo, shortInfoLoading, shortInfoError, shownCategory}) => {
    return {shortInfo, shortInfoLoading, shortInfoError, shownCategory}
};

const mapDispatchToProps = {shortInfoLoaded, shortInfoLoadedError};

export default compose(
    withDataService(),
    connect(mapStateToProps, mapDispatchToProps)
)(ListOfPlacesContainer);