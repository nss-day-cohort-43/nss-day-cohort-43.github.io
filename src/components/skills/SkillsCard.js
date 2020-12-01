import React from "react"
import { Col, Row } from "react-bootstrap"

export const SkillsCard = ({ skill }) => ( 
        <Col xs={2} id="skill-card-column">
            <Row id="skill-text">{skill.title}</Row>
        </Col>
)