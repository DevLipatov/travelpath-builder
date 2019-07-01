import React from 'react';
import {Button, Card} from "react-bootstrap";

import './list-of-places-item.css';

const ListOfPlacesItem = ({itemData, addToPath, deleteFromPath}) => {

    return (
        <Card border="info">
            <Card.Img variant="top" src={itemData.img}/>
            <Card.Body>
                <Card.Title>{itemData.title}</Card.Title>
                <Card.Text>{itemData.description}</Card.Text>
            </Card.Body>
            <Card.Footer>
                <a className="text-muted"
                   href={itemData.wiki}
                   target="_blank"
                   rel="noopener noreferrer">
                    {itemData.wiki}
                </a>
                <br/>
                <Button
                    variant="success"
                    onClick={addToPath}>
                    Add to path
                </Button>
                <Button
                    variant="danger"
                    onClick={deleteFromPath}>
                    Delete from path
                </Button>
            </Card.Footer>
        </Card>
    )
};

export default ListOfPlacesItem;