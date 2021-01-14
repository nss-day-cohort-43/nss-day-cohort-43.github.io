import React from 'react';
import { Card, Button, ButtonGroup, Image, OverlayTrigger, Tooltip } from 'react-bootstrap';

export const CardHTML = ({mate}) => {

    // Array to use to render the contact links for each card
    // const contactList = [
    //     {"linkedIn": mate.linkedIn}, 
    //     {"github": mate.github}, 
    //     {"personalSite": mate.personalSite},
    //     {"dibbble": mate.dribbble}
    // ];

    const makeBanner = (studentFocus) => {
        if(studentFocus === "Front-End UI/UX Developer"){
            return (
                    <Card.Header className="card-focus-banner card-focus-banner--uiux">
                        <p>{studentFocus}</p>
                    </Card.Header>
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


    // this is the textbox that appears over a link on hover
    const renderTooltip = (props) => {
        return (
            <Tooltip id="button-tooltip" {...props}>
                {props}
            </Tooltip>
        )  
    }


    return (
    
            <Card className="studentCard col-md-6 col-lg-4 mb-5">
                
                    {makeBanner(mate.focus)}
                

                <Card.Img src={mate.photo} className="image-container"/>
                <Card.Body className="card-content">
                    <Card.Title as="h4" className="card-name">{`${mate.firstName} ${mate.lastName}`}</Card.Title>
                    <Card.Text>
                    {mate.quote}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <ButtonGroup className="icons" aria-label="contact-links">
                        {
                            (mate.linkedIn !== "") &&
                               <div className="btn-box">
                                <OverlayTrigger
                                    placement="top"
                                    delay={{ show: 100, hide: 100 }}
                                    overlay={renderTooltip("LinkedIn")}
                                    >
                                    <Button className={`btn-social-link LinkedIn-link`} href={mate.linkedIn} target="_blank" >
                                        <Image src="icons/linkedin.png" roundedCircle fluid/>
                                    </Button>
                                </OverlayTrigger>
                            </div>
                        }
                        {
                            (mate.github !== "") &&
                                <div className="btn-box">
                                <OverlayTrigger
                                    placement="top"
                                    delay={{ show: 100, hide: 100 }}
                                    overlay={renderTooltip("Github")}
                                    >
                                    <Button className={`btn-social-link Github-link`} href={mate.github} target="_blank" >
                                        <Image src="icons/github.png" roundedCircle fluid/>
                                    </Button>
                                </OverlayTrigger>
                            </div>
                        }

                        {
                            (mate.dribbble !== "") &&
                                <div className="btn-box">
                                <OverlayTrigger
                                    placement="top"
                                    delay={{ show: 100, hide: 100 }}
                                    overlay={renderTooltip("Dribbble")}
                                    >
                                    <Button className={`btn-social-link Dribbble-link`} href={mate.dribbble} target="_blank" >
                                        <Image src="icons/dribbble_ball.png" roundedCircle fluid/>
                                    </Button>
                                </OverlayTrigger>
                            </div>
                        }

                        {
                            (mate.personalSite !== "") &&
                                <div className="btn-box">
                                <OverlayTrigger
                                    placement="top"
                                    delay={{ show: 100, hide: 100 }}
                                    overlay={renderTooltip("Website")}
                                    >
                                    <Button className={`btn-social-link Website-link`} href={mate.personalSite} target="_blank" >
                                        <Image src="icons/personalSitee.png" roundedCircle fluid/>
                                    </Button>
                                </OverlayTrigger>
                            </div>
                        }


                    </ButtonGroup>
                </Card.Footer>
            </Card>
        
    )
}

