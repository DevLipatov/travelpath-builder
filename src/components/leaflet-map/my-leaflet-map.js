import React from 'react';
import {Map, Marker, Popup, TileLayer} from 'react-leaflet';
import DataService from '../../services/data-service';

import './my-leaflet-map.css';

const MyLeafletMap = () => {
    const dataService = new DataService();
    const parkingPosition = [53.678732, 23.824612];
    const allCoordinates = dataService.getAllCoordinates();

    const allMarkers = allCoordinates.map(
        (el) => {
            return (
                <Marker position={el.coordinates} key={el.id}>
                    <Popup>
                        My first marker
                        <br/>
                        Random position
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
            <Marker position={parkingPosition} >
                <Popup>
                    My first marker
                    <br/>
                    Random position
                </Popup>
            </Marker>
            {allMarkers}
        </Map>
    );
};

export default MyLeafletMap;