import React from 'react';
import {Navbar, Nav, Form, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './navbar-header.css';

const NavbarHeader = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Navbar.Brand href="/">Travelpath builder</Navbar.Brand>
                <Nav className="mr-auto">
                    <Link to="/" className="nav-link">New path</Link>
                    <Link to="/ready" className="nav-link">Ready paths</Link>
                    <Link to="/my" className="nav-link">My paths</Link>
                </Nav>
                <Form inline>
                    <Button variant="outline-info">Register</Button>
                    <Button variant="outline-info">Login</Button>
                </Form>
            </Navbar>
        </div>
    )
};

export default NavbarHeader;