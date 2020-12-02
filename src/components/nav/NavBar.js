import React from 'react'
import { RSVPButton } from './RSVP'
import { Navbar, Nav } from 'react-bootstrap'
import './NavBar.scss'



export const NavBar = (props) => {
    return (
        <>
            <Navbar className="nav-container" expand="lg" fixed="top">
                <Navbar.Brand href="#page-top">Nashville Software School</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="mainNavBurger" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="#developers">Developers</Nav.Link>
                        <Nav.Link href="#tech-section">Our Tech Stack</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <RSVPButton />

            </Navbar>
        </>
    )
};