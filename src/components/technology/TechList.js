import { TechContext } from './TechProvider'
import { TechCard } from './TechCard'
import React, { useEffect, useContext } from "react"
import { Container, Row, Col } from 'react-bootstrap'

export const TechList = () => {

    const { techs, getTech } = useContext(TechContext)


    useEffect(() => {
        getTech()

    }, [])

    const FilterEveryoneTech = (obj) => {
        if (obj.learnedBy === "everyone") {
            return <TechCard key={obj.id} tech={obj} />
        }
    }

    const FilterUiUxTech = (obj) => {
        if (obj.learnedBy === "ui-ux") {
            return <TechCard key={obj.id} tech={obj} />
        }
    }
    const FilterFullStackTech = (obj) => {
        if (obj.learnedBy === "full-stack") {
            return <TechCard key={obj.id} tech={obj} />
        }
    }


    return (
        <div id="tech">
            <Container className="tech-top">


                <Row className="justify-content-center">
                    <Col className="justify-content-center">
                        <h3 id="tech-headline" className="tech-header">Technologies & Skills</h3>
                    </Col>
                </Row>


                <Row>
                    <Col className="justify-content-center">
                        <h4 className="tech-text-subheadline">Everyone learned</h4>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Row className="justify-content-center">
                            {
                                techs.map(tech => {
                                    return FilterEveryoneTech(tech)
                                })
                            }
                        </Row>
                    </Col>
                </Row>

                <Row>
                    <Col><hr /></Col>
                </Row>

                <Row >
                    <Col xs={12} lg={6} className="techGroup">
                        <Row className="justify-content-center">
                            <h4 className="tech-text-subheadline">UI/UX Developers</h4>
                        </Row>

                        <Row className="justify-content-center" >
                            {
                                techs.map(tech => {
                                    return FilterUiUxTech(tech)
                                })
                            }
                        </Row>
                        <Row>
                            <Col >
                                <p className="tech-text">With a focus on the <em>User</em>, students worked with Figma, Sass, and Firebase to practice prototyping, creating personas, user and usability testing, and journey mapping.</p>
                            </Col>
                        </Row>
                    </Col>

                    <Col className='d-xs-12 d-lg-none'>
                        <hr />
                    </Col>

                    <Col xs={12} lg={6} className="techGroup">
                        <Row className="justify-content-center">
                            <h4 className="tech-text-subheadline">Full-Stack Developers</h4>
                        </Row>

                        <Row className="justify-content-center" >
                            {
                                techs.map(tech => {
                                    return FilterFullStackTech(tech)
                                })
                            }
                        </Row>
                        <Row>
                            <Col >
                                <p className="tech-text">Students developed in C# with Microsoft.NET, .NET Core, and Visual Studio combined with SQL Server.</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <div className="text-end"></div>
            </Container>

        </div>

    )
}