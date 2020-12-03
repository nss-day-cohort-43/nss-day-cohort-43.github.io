import { React, useState } from 'react'
import { RSVPButton } from './RSVP'
import { Navbar, Nav } from 'react-bootstrap'
import './NavBar.scss'



export const NavBar = (props) => {

    const [expanded, setExpanded] = useState(false);

    return (
        <>
            <Navbar className="nav-container" bg="primary" expand="lg" fixed="top" expanded={expanded}>
                <Navbar.Brand href="#page-top"><strong>Nashville Software School</strong></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="mainNavBurger" onClick={() => setExpanded(expanded ? false : "expanded")} />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link onClick={() => setExpanded(false)} href="#devs">Developers</Nav.Link>
                        <Nav.Link onClick={() => setExpanded(false)} href="#tech">Our Tech Stack</Nav.Link>
                    </Nav>
                    <RSVPButton />
                </Navbar.Collapse>
            </Navbar>
        </>
    )
};