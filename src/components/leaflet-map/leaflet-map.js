import React, {Component} from 'react';
import {compose} from "redux";
import {connect} from 'react-redux';
import {Badge, Button, ButtonGroup, Image} from "react-bootstrap";
import {Map, Marker, Popup, TileLayer} from 'react-leaflet';
import withDataService from "../hoc/with-data-service";
import {addToPath, deleteFromPath, setModalContent, shortInfoLoaded, toggleModalOn} from "../../actions";

import './leaflet-map.css';

const LeafletMap = ({info, addToPath, deleteFromPath, onInfoClick}) => {

    const parkingPosition = [53.678732, 23.824612];

    const allMarkers = info.map(
        (el) => {
            return (
                <Marker position={el.coordinates} key={el.id}>
                    <Popup>
                        <h4>
                            <Badge variant="secondary">
                                {el.title}
                            </Badge>
                        </h4>
                        <Image src={el.img} fluid/>
                        <div className="d-flex flex-column">
                            <ButtonGroup size="sm" className="mt-3">
                                <Button
                                    variant="info"
                                    size="sm"
                                    onClick={() => onInfoClick(el)}>
                                    More info
                                </Button>
                                <Button
                                    variant="success"
                                    size="sm"
                                    onClick={() => addToPath(el.id)}>
                                    Add to path
                                </Button>
                                <Button
                                    variant="danger"
                                    size="sm"
                                    onClick={() => deleteFromPath(el.id)}>
                                    Delete from path
                                </Button>
                            </ButtonGroup>
                        </div>
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
        const {
            shortInfo,
            shownCategory,
            addToPath,
            deleteFromPath,
            toggleModalOn,
            setModalContent
        } = this.props;

        const sortInfo = (info) => {
            if (shownCategory !== "All") {
                return info.filter((el) => el.category === shownCategory)
            }

            return info
        };

        const onInfoClick = (info) => {
            setModalContent(info);
            toggleModalOn();
        };


        return <LeafletMap
            info={sortInfo(shortInfo)}
            addToPath={addToPath}
            deleteFromPath={deleteFromPath}
            toggleModalOn={toggleModalOn}
            onInfoClick={onInfoClick}/>
    }
}

const mapStateToProps = ({shortInfo, shownCategory}) => {
    return {shortInfo, shownCategory}
};

const mapDispatchToProps = {
    shortInfoLoaded,
    addToPath,
    deleteFromPath,
    toggleModalOn,
    setModalContent
};

export default compose(
    withDataService(),
    connect(mapStateToProps, mapDispatchToProps)
)(LeafletMapContainer);