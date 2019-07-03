import React, {Component} from 'react';
import {compose} from "redux";
import {connect} from 'react-redux';
import {Map, Marker, Popup, TileLayer} from 'react-leaflet';
import withDataService from "../hoc/with-data-service";
import ShortInfoCard from '../short-info-card';
import {
    shortInfoLoaded,
    shortInfoLoadedError,
    toggleModalOn
} from "../../actions";

import './leaflet-map.css';

const LeafletMap = ({sortedData}) => {

    const parkingPosition = [53.678732, 23.824612];

    const allMarkers = sortedData.map(
        (el) => {
            return (
                <Marker position={el.coordinates} key={el.id}>
                    <Popup>
                        <ShortInfoCard data={el}/>
                    </Popup>
                </Marker>
            )
        }
    );

    return (
        <Map center={parkingPosition} zoom={15}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
            {/*<Marker position={parkingPosition}>*/}
            {/*<Popup>*/}
            {/*Parking*/}
            {/*</Popup>*/}
            {/*</Marker>*/}
            {allMarkers}
        </Map>
    );
};

class LeafletMapContainer extends Component {

    componentDidMount() {
        const {dataService, shortInfoLoaded, shortInfoLoadedError} = this.props;
        dataService.getShortInfo()
            .then((shortData) => shortInfoLoaded(shortData))
            .catch((error) => shortInfoLoadedError(error));
    }

    render() {
        const {
            shortInfo,
            shownCategory,
        } = this.props;

        const sortInfo = (info) => {
            if (shownCategory !== "All") {
                return info.filter((el) => el.category === shownCategory)
            }

            return info
        };

        return <LeafletMap sortedData={sortInfo(shortInfo)}/>
    }
}

const mapStateToProps = ({shortInfo, shownCategory}) => {
    return {shortInfo, shownCategory}
};

const mapDispatchToProps = {
    shortInfoLoaded,
    shortInfoLoadedError,
    toggleModalOn,
};

export default compose(
    withDataService(),
    connect(mapStateToProps, mapDispatchToProps)
)(LeafletMapContainer);