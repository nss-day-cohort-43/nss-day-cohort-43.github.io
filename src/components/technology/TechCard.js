import React from "react"
// import { Col, Container, Row } from "react-bootstrap"
// import { Link } from "react-router-dom"
import "./Tech.scss"

export const TechCard = ({ tech }) => (
    <div className="iconbox text-center col">
       
            <a href={tech.site} target="_blank" rel="noreferrer">
                <img src={tech.icon} className="img-icon mx-auto d-block" alt={tech.title} />
            </a>
       
        <h4 className="text-center" id="tech-card-text">{tech.title}</h4>
    </div>
)