import React from 'react'
import { RSVPButton } from './RSVP'
import { Navbar, Nav } from 'react-bootstrap'
import './NavBar.scss'
import Image from 'react-bootstrap/Image'


export const NavBar = (props) => {
    return (
        <>
            <Navbar className="nav-container" bg="primary" expand="lg" fixed="top">
                <Navbar.Brand href="#page-top"><Image className="nssLogo" src="images/placeholder-images/c43-pick_logo.png" fluid /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="mainNavBurger" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#devs">Devs</Nav.Link>
                        <Nav.Link href="#tech">Tech</Nav.Link>
                        <Nav.Link href="#thanks">Thanks</Nav.Link>
                    </Nav>
                    <RSVPButton />
                </Navbar.Collapse>

            </Navbar>
        </>
    )
};