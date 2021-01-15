import React from "react"
import { Col, Container, Row } from "react-bootstrap"


export const TechCard = ({ tech }) => (
    <Col lg={1} xs={3} className='techCard'>

        <a href={tech.site} target="_blank" rel="noreferrer">
            <img src={tech.icon} className="img-icon" alt={tech.title} />
        </a>

        <h4 className="tech-card-text">{tech.title}</h4>
    </Col>
)