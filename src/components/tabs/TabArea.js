import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import { TechContext } from '../technology/TechProvider'
import { TechCard } from '../technology/TechCard'
import { SkillContext } from '../skills/SkillProvider'
import { SkillsCard } from '../skills/SkillsCard'
import { useContext, useEffect } from 'react'
import { Container, Row } from 'react-bootstrap'
import "../technology/Tech.scss"
import "../skills/Skill.scss"
import "./TabArea.scss"

export const TechForEveryone = (obj) => {
  if (obj.learnedBy === "everyone") {
    return <TechCard key={obj.id} tech={obj} />
  }
}
export const TechForUiUx = (obj) => {
  if (obj.learnedBy === "ui-ux" || obj.learnedBy === "everyone") {
    return <TechCard key={obj.id} tech={obj} />
  }
}
export const TechForFullStack = (obj) => {
  if (obj.learnedBy === "full-stack" || obj.learnedBy === "everyone") {
    return <TechCard key={obj.id} tech={obj} />
  }
}



export const TabArea = () => {

  const { techs, getTech } = useContext(TechContext)
  const { skills, getSkill } = useContext(SkillContext)

  useEffect(() => {
    getTech()
    getSkill()
  }, [])

  const TabFilterEveryone = (obj) => {
    if (obj.learnedBy === "everyone") {
      return <TechCard key={obj.id} tech={obj} />
    }
  }
  const TabFilterUiUx = (obj) => {
    if (obj.learnedBy === "ui-ux" || obj.learnedBy === "everyone") {
      return <TechCard key={obj.id} tech={obj} />
    }
  }
  const TabFilterFullStack = (obj) => {
    if (obj.learnedBy === "full-stack" || obj.learnedBy === "everyone") {
      return <TechCard key={obj.id} tech={obj} />
    }
  }

  
  return (
    <div id="devs">
      <Tabs defaultActiveKey="everyone" id="uncontrolled-tab-example">
        <Tab eventKey="everyone" title="Everyone">
          <Container id="tech-section">
            <Row id="icon-container">
              {
                techs.map(tech => {
                  return TabFilterEveryone(tech)
                })
              }
            </Row>
          </Container>
        </Tab>
        <Tab eventKey="uiUx" title="UI/UX">
          <Container id="tech-section">
            <Row id="icon-container">
              {
                techs.map(tech => {
                  return TabFilterUiUx(tech)
                })
              }
            </Row>
          </Container>
          <Container id="skill-section">
            <h3 id="skills-learned-header">SKILLS WE LEARNED</h3>
            <Row id="skills-container">
              {
                skills.map(skill => {
                  return <SkillsCard key={skill.id} skill={skill} />
                })
              }
            </Row>
          </Container>
        </Tab>
        <Tab eventKey="fullstack" title="Full Stack">
          <Container id="tech-section">
            <Row id="icon-container">
              {
                techs.map(tech => {
                  return TabFilterFullStack(tech)
                })
              }
            </Row>
          </Container>
        </Tab>
      </Tabs>
    </div>
  )
}