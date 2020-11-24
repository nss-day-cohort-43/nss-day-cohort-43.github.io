import React from 'react';
import { Card, Button, ButtonGroup, Image } from 'react-bootstrap';
import './customCard.scss';
import AverageGuy from "../cards/AverageGuy.jpg";


export const CardHTML = (inputStudent) => {

    // inputImagePath should be the path string 
    // of the photo property of a cohort student's 
    // object in the database
    // e.g.
    // console.log(inputStudent) ==> "cohortMates[#]"

    // Array to use to render the contact links for each card
    const contactList = [inputStudent.linkedIn, inputStudent.github, inputStudent.personalSite, inputStudent.dribbble]

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
            let contactType = ""
            // if a contact property of student is not "", make contact icon HTML
            if(contactLink.includes("linkedin")){
                contactType = ""
            }
            

            if(contactLink !== ""){
                return (
                    <>
                        <div className="btn-box">
                            <Button className={`btn-link ${contactLink}-link`} variant="light">
                                <Image src={} />
                            </Button>
                            <p>LinkedIn</p>
                        </div>
                    </>
                )
            }
        })
    }



    return (
        <>
            <Card style={{ width: '18rem' }}>

                {/* {makeBanner(inputStudent.focus) } */}
                <div className="card-focus-banner card-focus-banner--uiux">
                    <p>UI/UX Front-End Developer</p>
                </div>

                <Card.Img variant="top" src="../public/images/placeholder-images/ArelColin.jpeg" />
                <Card.Body>
                    <Card.Title className="card-name">Name Here</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <ButtonGroup className="icons" aria-label="contact-links">
                        <div className="btn-box">
                            <Button className="btn-link linkedin-link" variant="light">
                                <Image src="" />
                            </Button>
                            <p>LinkedIn</p>
                        </div>
                        <div className="btn-box">
                            <Button className="btn-link github-link" variant="light">
                                <Image src="" />
                            </Button>
                            <p>GitHub</p>
                        </div>
                        <div className="btn-box">
                            <Button className="btn-link personalSite-link" variant="light">
                                <Image src="" />
                            </Button>
                            <p>Personal Site</p>
                        </div>
                        <div className="btn-box">
                            <Button className="btn-link other-link" variant="light">
                                <Image src="" />
                            </Button>
                            <p>Other</p>
                        </div>
                    </ButtonGroup>
                </Card.Body>
            </Card>
        </>
    )
}