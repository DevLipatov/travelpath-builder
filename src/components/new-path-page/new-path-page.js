import React from 'react';
import {
    Button, Container, Row, Col,
    InputGroup, FormControl, Tabs, Tab
} from 'react-bootstrap';
import MyLeafletMap from '../leaflet-map/index';
import ListOfPlacesComponent from '../list-of-places-component/index';
import PathListGroup from '../path-list-group';
import SortGroupBar from "../sort-group-bar/index";
import MockData from '../../mock-data/mock-data';

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
                        <PathListGroup/>
                    </Col>
                    <Col sm={10}>
                        <SortGroupBar/>
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