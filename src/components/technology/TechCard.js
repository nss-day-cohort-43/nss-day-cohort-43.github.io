import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"

export const TechCard = ({ tech }) => (
    <Container>
        <Col>
            <Row><Link to={tech.site}>{tech.icon}</Link></Row>
            <Row>{tech.title}</Row>
        </Col>
    </Container>
)