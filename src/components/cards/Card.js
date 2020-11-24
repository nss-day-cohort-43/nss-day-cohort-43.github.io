import React from 'react';
import { Card, Button, ButtonGroup, Image } from 'react-bootstrap';
import './customCard.scss';

export const CardHTML = () => {



    return (
        <>
            <Card style={{ width: '18rem' }}>
                <div className="card-focus-banner card-focus-banner--uiux">
                    <p>UI/UX Front-End Developer</p>
                </div>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Name Here</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <ButtonGroup className="icons" aria-label="contact-links">
                        <Button className="btn-link linkedin-link" variant="light">
                            <Image src="" />
                        </Button>
                        <Button className="btn-link github-link" variant="light">
                            <Image src="" />
                        </Button>
                        <Button className="btn-link personalSite-link" variant="light">
                            <Image src="" />
                        </Button>
                        <Button className="btn-link other-link" variant="light">
                            <Image src="" />
                        </Button>
                    </ButtonGroup>
                </Card.Body>
            </Card>
        </>
    )
}