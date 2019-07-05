import React, {Component} from 'react';
import {compose} from "redux";
import {connect} from 'react-redux';
import {Map, Marker, Popup, TileLayer} from 'react-leaflet';
import withDataService from "../hoc/with-data-service";
import ShortInfoCard from '../short-info-card';
import {shortInfoLoaded, shortInfoLoadedError, toggleModalOn} from "../../actions";
import Routing from './routing'

import './leaflet-map.css';

const LeafletMap = ({sortedData, saveMap, routing}) => {

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
        <Map center={parkingPosition} zoom={15} ref={saveMap}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
            {allMarkers}
            {routing}
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

    saveMap = map => {
        this.map = map;
        this.setState({});
    };

    render() {
        const {
            shortInfo,
            shownCategory
        } = this.props;

        const sortInfo = (info) => {
            if (shownCategory !== "All") {
                return info.filter((el) => el.category === shownCategory)
            }

            return info
        };

        return <LeafletMap sortedData={sortInfo(shortInfo)}
                           saveMap={this.saveMap}
                           routing={<Routing map={this.map}/>}/>
    }
}

const mapStateToProps = ({shortInfo, shownCategory, mapInit}) => {
    return {shortInfo, shownCategory, mapInit}
};

const mapDispatchToProps = {
    shortInfoLoaded,
    shortInfoLoadedError,
    toggleModalOn
};

export default compose(
    withDataService(),
    connect(mapStateToProps, mapDispatchToProps)
)(LeafletMapContainer);