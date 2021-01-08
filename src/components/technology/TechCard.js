import React from "react"
// import { Col, Container, Row } from "react-bootstrap"
// import { Link } from "react-router-dom"
import "./Tech.scss"

export const TechCard = ({ tech }) => (
    <div className="col1">
        <div className="imgBox">
            <a href={tech.site} target="_blank" rel="noreferrer">
                <img src={tech.icon} className="img-icon" alt="" />
            </a>
        </div>
        <h4 id="tech-card-text">{tech.title}</h4>
    </div>
)