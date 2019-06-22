import React from 'react';
import {Map, Marker, Popup, TileLayer} from 'react-leaflet';

import './my-leaflet-map.css';

const MyLeafletMap = () => {
    const position = [51.505, -0.09];
    return (
        <Map center={position} zoom={6}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy;
                <a href=&quot;http://osm.org/copyright&quot;>
                OpenStreetMap
                </a>
                contributors"/>
            <Marker position={position}>
                <Popup>
                    My first marker
                    <br/>
                    Random position
                </Popup>
            </Marker>
        </Map>
    );
};

export default MyLeafletMap;