import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import "./Tech.scss"

export const TechCard = ({ tech }) => ( 
        <Col xs={4} sm={2} id="tech-stack">
            <Row><a href={tech.site} target="_blank"><img src={tech.icon} className="img-icon" /></a></Row>
            <Row id="tech-text">{tech.title}</Row>
        </Col>
)