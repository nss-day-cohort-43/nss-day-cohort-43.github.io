import React from 'react'
import { RSVPButton } from './RSVP'
import { Navbar, Nav } from 'react-bootstrap'

export const NavBar = (props) => {
    return (
        <>
            <Navbar bg="light" expand="lg" sticky="top">
                <Navbar.Brand href="#page-top">NSS C43</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
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