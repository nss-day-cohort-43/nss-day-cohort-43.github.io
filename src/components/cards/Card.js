import React from 'react';
import { Card, Button, ButtonGroup, Image, OverlayTrigger, Tooltip } from 'react-bootstrap';

export const CardHTML = ({mate}) => {

    // Array to use to render the contact links for each card
    const contactList = [mate.linkedIn, mate.github, mate.personalSite, mate.dribbble]

    const makeBanner = (studentFocus) => {
        if(studentFocus === "Front-End UI/UX Developer"){
            return (
                    <div className="card-focus-banner card-focus-banner--uiux">
                        <p>{studentFocus}</p>
                    </div>
            )
        }
        else if (studentFocus === "Full-Stack C# Developer"){
            return (
                    <div className="card-focus-banner card-focus-banner--fullstack">
                        <p>{studentFocus}</p>
                    </div>  
            )
        }
    }

    const makeContactList = () => {
        const contactListHTML = contactList.map(contactLink => {
            let contactIconPath = ""
            let contactIconName = ""
            let output = null
            // if a contact property of student is not "", make contact icon HTML
            if(contactLink.indexOf("linkedin", 0) > 0){
                contactIconPath = "icons/linkedIn.png"
                contactIconName = "LinkedIn"
            }
            else if(contactLink.indexOf("github", 0) > 0){
                contactIconPath = "icons/github.svg.png"
                contactIconName = "GitHub"
            }
            else if(contactLink.indexOf("dribbble", 0) > 0){
                contactIconPath = "icons/dribbble_ball.png"
                contactIconName = "Dribbble"
            }
            else {
                contactIconPath = "icons/personalSite.png"
                contactIconName = "Website"
            }
            
            if(contactLink !== ""){
                output = 
                    <>
                        <div className="btn-box">
                        <OverlayTrigger
                            placement="top"
                            delay={{ show: 100, hide: 100 }}
                            overlay={renderTooltip(contactIconName)}
                            >
                            <Button className={`btn-social-link ${contactIconName}-link`} href={contactLink} target="_blank" >
                                <Image src={contactIconPath} roundedCircle fluid/>
                            </Button>
                        </OverlayTrigger>
                        </div>
                    </>
            }

            return output // this return is for the .map()

            
        })
        return contactListHTML
    }


    // this is the textbox that appears over a link on hover
    const renderTooltip = (props) => {
        return (
            <Tooltip id="button-tooltip" {...props}>
                {props}
            </Tooltip>
        )  
    }


    return (
        <>
            <Card className="studentCard">
                <Card.Header>
                    {makeBanner(mate.focus)}
                </Card.Header>

                <Card.Img src={mate.photo} />
                <Card.Body className="card-content">
                    <Card.Title as="h4" className="card-name">{`${mate.firstName} ${mate.lastName}`}</Card.Title>
                    <Card.Text>
                    What will go in the card text?
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <ButtonGroup className="icons" aria-label="contact-links">
                        {makeContactList()}
                    </ButtonGroup>
                </Card.Footer>
            </Card>
        </>
    )
}

