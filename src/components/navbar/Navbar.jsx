import React from 'react'
import "./Navbar.css"
import { Container, Navbar,Nav, Form, FormControl, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';

function NavbarMe() {
    return (
        <>
            <Navbar className="navbarShadow" expand="lg" style={{backgroundColor: '#191c19'}}>
                <Container fluid className="mx-4">
                    <Link to="/" className="flex-grow-1 navbarTitle text-decoration-none">Talent Pool Tracker</Link>
                    <Nav className="me-auto">
                        <Nav.Link className="text-light" href="/talent">Talent</Nav.Link>
                        <Nav.Link className="text-light"  href="/pic">PIC</Nav.Link>
                        <Nav.Link className="text-light"  href="/companies">Company</Nav.Link>
                        <Nav.Link className="text-light"  href="/">Tracker</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default NavbarMe
