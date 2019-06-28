import React, {Component} from 'react';
import {compose} from "redux";
import {connect} from 'react-redux';
import {Button} from "react-bootstrap";
import {Map, Marker, Popup, TileLayer} from 'react-leaflet';
import withDataService from "../hoc/with-data-service";
import {shortInfoLoaded} from "../../actions";

import './leaflet-map.css';

const LeafletMap = ({info}) => {

    const parkingPosition = [53.678732, 23.824612];

    const allMarkers = info.map(
        (el) => {
            return (
                <Marker position={el.coordinates} key={el.id}>
                    <Popup>
                        {el.title}
                        <br/>
                        <img src={el.img}/>
                        <br/>
                        <Button variant="outline-info" size="sm">More info</Button>
                    </Popup>
                </Marker>
            )
        }
    );

    return (
        <Map center={parkingPosition} zoom={15}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy;
                <a href=&quot;http://osm.org/copyright&quot;>
                OpenStreetMap
                </a>
                contributors"/>
            <Marker position={parkingPosition}>
                <Popup>
                    Parking
                </Popup>
            </Marker>
            {allMarkers}
        </Map>
    );
};

class LeafletMapContainer extends Component {

    componentDidMount() {
        const {dataService, shortInfoLoaded} = this.props;
        dataService.getShortInfo()
            .then((info) => shortInfoLoaded(info));
    }

    render() {
        const {shortInfo, shownCategory} = this.props;

        const sortInfo = (info) => {
            if (shownCategory !== "All") {
                return info.filter((el) => el.category===shownCategory)
            }

            return info
        };

        return <LeafletMap info={sortInfo(shortInfo)}/>
    }
}

const mapStateToProps = ({shortInfo, shownCategory}) => {
    return {shortInfo, shownCategory}
};

const mapDispatchToProps = {shortInfoLoaded};

export default compose(
    withDataService(),
    connect(mapStateToProps, mapDispatchToProps)
)(LeafletMapContainer);