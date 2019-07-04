import React, {Component} from 'react';
import {compose} from "redux";
import {connect} from 'react-redux';
import {Button, ButtonGroup, Card} from "react-bootstrap";
import {
addToPath,
deleteFromPath,
fullInfoLoaded,
fullInfoLoadedError,
setModalContent,
toggleModalOn
} from "../../actions";

import './short-info-card.css';
import withDataService from "../hoc/with-data-service";

class ShortInfoCard extends Component {

    render() {
        const {
            data,
            setModalContent,
            toggleModalOn,
            addToPath,
            deleteFromPath,
            dataService,
            fullInfoLoaded,
            fullInfoLoadedError
        } = this.props;

        const onInfoClick = () => {
            setModalContent(data);
            console.log(data.id);
            dataService.getFullInfoById(data.id)
                .then((data) => fullInfoLoaded(data))
                .catch((error) => fullInfoLoadedError(error));
            toggleModalOn();
        };

        return (
            <Card>
                <div className="card-img-container">
                    <Card.Img variant="top" src={data.img}/>
                </div>
                <Card.Body>
                    <Card.Title>{data.title}</Card.Title>
                    <ButtonGroup size="sm" className="d-flex">
                        <Button
                            variant="info"
                            size="sm"
                            onClick={() => onInfoClick()}>
                            Full info
                        </Button>
                        <Button
                            variant="success"
                            size="sm"
                            onClick={() => addToPath(data.id)}>
                            Add
                        </Button>
                        <Button
                            variant="danger"
                            size="sm"
                            onClick={() => deleteFromPath(data.id)}>
                            Delete
                        </Button>
                    </ButtonGroup>
                </Card.Body>
            </Card>
        )
    }
}

const mapDispatchToProps = {
    setModalContent,
    toggleModalOn,
    addToPath,
    deleteFromPath,
    fullInfoLoaded,
    fullInfoLoadedError
};

export default compose(
    withDataService(),
    connect(null, mapDispatchToProps)
)(ShortInfoCard);