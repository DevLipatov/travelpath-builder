import React, {Component} from 'react';
import {connect} from 'react-redux';
import {compose} from "redux";
import {addToPath, deleteFromPath, fullInfoLoaded, loadingError} from "../../actions";
import {withDataService} from '../hoc';
import {CardColumns} from "react-bootstrap";
import ListOfPlacesItem from '../list-of-places-item';
import CustomSpinner from "../custom-spinner";
import ErrorIndicator from "../error-indicator";

import './list-of-places.css';

const ListOfPlaces = ({info, addToPath, deleteFromPath}) => {
    const elements = info.map(
        (item) => {
            return (
                <ListOfPlacesItem
                    itemData={item}
                    key={item.id}
                    addToPath={() => addToPath(item.id)}
                    deleteFromPath={() => deleteFromPath(item.id)}/>
            );
        }
    );
    return <CardColumns>{elements}</CardColumns>
};

class ListOfPlacesContainer extends Component {

    componentDidMount() {
        const {
            dataService,
            fullInfoLoaded,
            loadingError
        } = this.props;

        dataService.getFullInfo()
            .then((fullInfo) => fullInfoLoaded(fullInfo))
            .catch((error) => loadingError(error))
    }

    render() {
        const {
            fullInfo,
            listOfPlacesLoading,
            error,
            shownCategory,
            addToPath,
            deleteFromPath
        } = this.props;

        if (listOfPlacesLoading) {
            return <CustomSpinner/>
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

        return <ListOfPlaces
            info={filterInfo(fullInfo)}
            addToPath={addToPath}
            deleteFromPath={deleteFromPath}/>
    }
}

const mapStateToProps = ({fullInfo, listOfPlacesLoading, error, shownCategory}) => {
    return {fullInfo, listOfPlacesLoading, error, shownCategory}
};

const mapDispatchToProps = {
    addToPath,
    deleteFromPath,
    fullInfoLoaded,
    loadingError
};

export default compose(
    withDataService(),
    connect(mapStateToProps, mapDispatchToProps)
)(ListOfPlacesContainer);