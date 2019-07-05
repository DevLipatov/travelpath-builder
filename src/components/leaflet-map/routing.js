import {MapLayer, withLeaflet} from "react-leaflet";
import L from "leaflet";
import "leaflet-routing-machine";

class Routing extends MapLayer {
    createLeafletElement() {
        const {map} = this.props;
        let leafletElement = L.Routing.control({
            waypoints: [L.latLng(53.678465, 23.818597), L.latLng(53.677017, 23.823567)]
        }).addTo(map.leafletElement);
        return leafletElement.getPlan();
    }
}

export default withLeaflet(Routing);