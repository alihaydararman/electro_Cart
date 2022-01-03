import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
// import { HashLink } from 'react-router-hash-link';

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>

                    <Navbar.Brand href="#home" 
                    className='text-warning'>Electro Cart</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/aboutus">About Us</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">All Product</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                Dashboard
                            </Nav.Link>
                        </Nav>
                        
                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </div>
    );
};

export default Header;