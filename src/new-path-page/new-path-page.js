import React from 'react';
import {
    Nav, Button, Container, Row, Col,
    ListGroup, InputGroup, FormControl
} from 'react-bootstrap';
import MyLeafletMap from '../my-leaflet-map';

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
                        <Nav fill variant="tabs" defaultActiveKey="/">
                            <Nav.Item>
                                <Nav.Link href="/">
                                    Map
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="link-1">
                                    List of paths
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="disabled" disabled>
                                    Disabled
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <MyLeafletMap/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
};

export default NewPathPage;