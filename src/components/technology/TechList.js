import React, { useContext, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { TechContext } from "./TechProvider";
import { Col, Container, Row } from "react-bootstrap";
import { TechCard } from "./TechCard";

export const TechList = () => {
    const { techs, getTech } = useContext(TechContext)

    useEffect(() => {
        getTech()
    }, [])

    const history = useHistory()

    return (
        <Container>
            <Row>
                <Col>
                    {
                        techs.map(tech => {
                            return <TechCard key={tech.id} tech={tech} />
                        })
                    }
                </Col>
            </Row>
        </Container>
    )
}