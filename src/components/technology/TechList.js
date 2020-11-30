import React, { useContext, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { TechContext } from "./TechProvider";
import { Col, Container, Row } from "react-bootstrap";
import { TechCard } from "./TechCard";
import "./Tech.scss"

export const TechList = () => {
    const { techs, getTech } = useContext(TechContext)

    useEffect(() => {
        getTech()
    }, [])

    const history = useHistory()

    return (
        
            <Container id="tech-section">
                <Row>
                    {
                        techs.map(tech => {
                            return <TechCard key={tech.id} tech={tech} />
                        })
                    }
                </Row>
            </Container>
        
    )
}