import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import "./Tech.scss"

export const TechCard = ({ tech }) => (
    <Col>
        <a href={tech.site} target="_blank"><img src={tech.icon} className="img-icon" /></a>
        <h4 id="tech-card-text">{tech.title}</h4>
    </Col>
)