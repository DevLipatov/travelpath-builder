import React from 'react';
import {
    Navbar, Nav, Form, Button, Container, Row, Col, ListGroup, InputGroup,
    FormControl
} from 'react-bootstrap'

import './app.css'

const App = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Navbar.Brand href="#home">Travelpath builder</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#new">New path</Nav.Link>
                    <Nav.Link href="#ready">Ready paths</Nav.Link>
                    <Nav.Link href="#my">My paths</Nav.Link>
                </Nav>
                <Form inline>
                    <Button variant="outline-info">Register</Button>
                    <Button variant="outline-info">Login</Button>
                </Form>
            </Navbar>
            <Container>
                <Row>
                    <Col sm={2}>
                        <InputGroup className="mb-3">
                            <FormControl
                                placeholder="Enter your location"
                            />
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
                    <Col sm={8}>
                        map
                    </Col>
                </Row>
            </Container>
        </div>
    )
};

export default App;