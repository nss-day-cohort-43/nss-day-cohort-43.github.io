// Authored by Richie and Audrey

import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import './TabArea.scss'
import { CardList } from '../cards/CardList'
import { TechContext } from '../technology/TechProvider'
import { TechCard } from '../technology/TechCard'
import { SkillContext } from '../skills/SkillProvider'
import { SkillsCard } from '../skills/SkillsCard'
import React, { useContext, useEffect, useState } from 'react'
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
  
  const [allMates, setAllMates] = useState([])

  useEffect(() => {
    getTech()
    getSkill()
  }, [])


  // function to make call to database to get all the classmates
  const getAllMates = () => {
      return fetch ("database.json")
        .then(response => response.json())
  }
  
  // setting array of JUST the classmates to allMates
  useEffect(() => {
    getAllMates()
      .then(data => {
        setAllMates(filterNames(data.cohortMates))
      })
  }, [])

  // function to alphabetize by first name to create filtered list of all classmates
  const filterNames = (allMates) => {
      const alphaMates = allMates.sort(function(a, b) {
      const nameA = a.firstName.toUpperCase(); // ignore upper and lowercase
      const nameB = b.firstName.toUpperCase(); // ignore upper and lowercase
          if (nameA < nameB) {
          return -1;
          }
          if (nameA > nameB) {
          return 1;
          }
          // names must be equal
          return 0;
      })
      return alphaMates
  }
  // CREATING SUBSETS OF UX OR FULL STACK CLASSMATES ONLY
  const uiUxSubset = () => allMates.filter(mate => mate.focus.includes('UI/UX'))
  
  const fullStackSubset = () => allMates.filter(mate => mate.focus.includes('Full-Stack'))
 

  // FILTERING FOR TECH-----------------------------------------------
  function TabFilterEveryone(obj) {
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
          <Container id="classmates">
            <Row id="classmates-container">
              <CardList filteredMates={allMates} />
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
          <Container id="classmates">
            <Row id="classmates-container">
              <CardList filteredMates={uiUxSubset()} />
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
          <Container id="classmates">
            <Row id="classmates-container">
              <CardList filteredMates={fullStackSubset()} />
            </Row>
          </Container>
        </Tab>

      </Tabs>
    </div>
  )
}