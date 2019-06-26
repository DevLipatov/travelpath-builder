import React from 'react';
import {Card, CardColumns} from "react-bootstrap";
import {withDataService} from '../hoc';

import './list-of-places-component.css';

const ListOfPlacesComponent = ({dataService}) => {

    const elements = dataService.getFullInfo().map(
        (item) => {
            return (
                <Card border="info" key={item.id}>
                    <Card.Img variant="top" src={item.img}/>
                    <Card.Body>
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Text>{item.description}</Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <a className="text-muted"
                           href={item.wiki}
                           target="_blank"
                           rel="noopener noreferrer">
                            {item.wiki}
                        </a>
                    </Card.Footer>
                </Card>
            );
        }
    );
    return <CardColumns>{elements}</CardColumns>
};

export default withDataService()(ListOfPlacesComponent);