import React from "react"
import { Col, Container, Row } from "react-bootstrap"
// import { Link } from "react-router-dom"
import "./Tech.scss"

export const TechCard = ({ tech }) => (
    <Col lg={12} md={12} sm={3} xs={3}>
       
            <a href={tech.site} target="_blank" rel="noreferrer">
                <img src={tech.icon} className="img-icon" alt={tech.title} />
            </a>
       
        <h4 className="tech-card-text">{tech.title}</h4>
    </Col>
)

//className="iconbox text-center col col-lg-1 col-md-2 col-sm-4"