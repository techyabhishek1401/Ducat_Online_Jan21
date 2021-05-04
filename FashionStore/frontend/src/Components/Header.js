//rafce
import React from 'react';
import logo from '../assets/images/logo192.png';
import { Navbar, Nav, Container } from 'react-bootstrap'
const Header = () => {
    return (
        <header>

            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="#home"><img src={logo} width="50px" /> FASHION STORE</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className=" ml-auto">
                            <Nav.Link href="/cart"><i className="fas fa-shopping-cart"></i> CART</Nav.Link>
                            <Nav.Link href="/login"><i className="fas fa-user"></i> SIGIN</Nav.Link>
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
