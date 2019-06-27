import React from 'react';
import {Card} from "react-bootstrap";

const ListOfPlacesItem = ({itemData}) => {

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
            </Card.Footer>
        </Card>
    )
};

export default ListOfPlacesItem;