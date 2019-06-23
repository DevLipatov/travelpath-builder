import React from 'react';
import {
    Button, Container, Row, Col,
    ListGroup, InputGroup, FormControl, Tabs, Tab
} from 'react-bootstrap';
import MyLeafletMap from '../my-leaflet-map';
import ListOfPlacesComponent from '../list-of-places-component';
import SortGroupBar from "../sort-group-bar";
import MockData from '../mock-data/mock-data';
import categories from '../mock-data/mock-categories';

import './new-path-page.css';

const NewPathPage = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col sm={2}>
                        <InputGroup className="mb-3">
                            <FormControl placeholder="Enter your location"/>
                            <InputGroup.Append>
                                <Button variant="primary">Find</Button>
                            </InputGroup.Append>
                        </InputGroup>
                        <ListGroup>
                            <ListGroup.Item>Place1</ListGroup.Item>
                            <ListGroup.Item>Place2</ListGroup.Item>
                            <ListGroup.Item>Place3</ListGroup.Item>
                            <ListGroup.Item>Place4</ListGroup.Item>
                            <ListGroup.Item>Place5</ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col sm={10}>
                        <SortGroupBar categs={categories}/>
                        <Tabs justify defaultActiveKey="home">
                            <Tab eventKey="home" title="Map">
                                <MyLeafletMap/>
                            </Tab>
                            <Tab eventKey="profile" title="List of places">
                                <ListOfPlacesComponent data={MockData}/>
                            </Tab>
                        </Tabs>
                    </Col>
                </Row>
            </Container>
        </div>
    )
};

export default NewPathPage;