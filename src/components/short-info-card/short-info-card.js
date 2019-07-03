import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button, ButtonGroup, Card} from "react-bootstrap";
import {addToPath, deleteFromPath, setModalContent, toggleModalOn} from "../../actions";

import './short-info-card.css';

class ShortInfoCard extends Component{

    render() {
        const {
            data,
            setModalContent,
            toggleModalOn,
            addToPath,
            deleteFromPath
        } = this.props;

        const onInfoClick = (info) => {
            setModalContent(info);
            toggleModalOn();
        };

        return (
            <Card>
                <Card.Img variant="top" src={data.img}/>
                <Card.Body>
                    <Card.Title>{data.title}</Card.Title>
                    <ButtonGroup size="sm" className="d-flex">
                        <Button
                            variant="info"
                            size="sm"
                            onClick={() => onInfoClick(data)}>
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

const mapDispatchToProps = {setModalContent, toggleModalOn, addToPath, deleteFromPath};

export default connect(null, mapDispatchToProps)(ShortInfoCard);