import React from 'react';
import { Card, Button, ButtonGroup, Image, OverlayTrigger, Tooltip } from 'react-bootstrap';
//import AverageGuy from "../cards/AverageGuy.jpg";


export const CardHTML = (mate) => {

   

    // inputImagePath should be the path string 
    // of the photo property of a cohort student's 
    // object in the database
    // e.g.
    // console.log(mate) ==> "cohortMates[#]"

    // Array to use to render the contact links for each card
    const contactList = [mate.linkedIn, mate.github, mate.personalSite, mate.dribbble]

    const makeBanner = (studentFocus) => {
        if(studentFocus === "UI/UX Front-End Developer"){
            return (
                    <div className="card-focus-banner card-focus-banner--uiux">
                        <p>{studentFocus}</p>
                    </div>
            )
        }
        else if (studentFocus === "Full-Stack Developer"){
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
                contactIconPath = "icons/github.png"
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
            
            //console.log(contactIconName, contactIconPath);
            if(contactLink !== ""){
                output = 
                    <>
                        <div className="btn-box">
                        <OverlayTrigger
                            placement="top"
                            delay={{ show: 150, hide: 300 }}
                            overlay={renderTooltip(contactIconName)}
                            >
                            <Button className={`btn-link ${contactIconName}-link`} variant="light">
                                <Image src={contactIconPath} />
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

                {makeBanner(mate.focus)}
                {/* <div className="card-focus-banner card-focus-banner--uiux">
                    <p>UI/UX Front-End Developer</p>
                </div> */}

                <Card.Img variant="top" src={mate.photo} />
                <Card.Body className="card-content">
                    <Card.Title as="h4" className="card-name">{`${mate.firstName} ${mate.lastName}`}</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <ButtonGroup className="icons" aria-label="contact-links">
                        {makeContactList()}
                    </ButtonGroup>
                </Card.Body>
            </Card>
        </>
    )
}