import React from 'react'
import {withScriptjs, withGoogleMap, GoogleMap, Marker} from "react-google-maps"

const MyGoogleMap = withScriptjs(withGoogleMap((props) =>

    <GoogleMap
        defaultZoom={6}
        defaultCenter={{lat: -53.682304, lng: 23.831562}}>
        {props.isMarkerShown &&
        <Marker position={{lat: -53.682304, lng: 23.831562}}/>}
    </GoogleMap>
));

export default MyGoogleMap;