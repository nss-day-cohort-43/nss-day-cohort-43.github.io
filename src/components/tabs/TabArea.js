import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import { TechCard } from '../technology/TechCard'
import { useContext, useEffect } from 'react'
import { TechContext } from '../technology/TechProvider'
import { Container, Row } from 'react-bootstrap'



export const TabArea = () => {

  const { techs, getTech } = useContext(TechContext)

  useEffect(() => {
    getTech()
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
    <Tabs defaultActiveKey="everyone" id="uncontrolled-tab-example">
      <Tab eventKey="everyone" title="Everyone">
        <Container>
          <Row>
            {
              techs.map(tech => {
                return TabFilterEveryone(tech)
              })
            }
          </Row>
        </Container>
      </Tab>
      <Tab eventKey="ui-ux" title="UI/UX">
        <Container>
          <Row>
            {
              techs.map(tech => {
                return TabFilterUiUx(tech)
              })
            }
          </Row>
        </Container>
      </Tab>
      <Tab eventKey="full-stack" title="Full Stack">
        <Container>
          <Row>
            {
              techs.map(tech => {
                return TabFilterFullStack(tech)
              })
            }
          </Row>
        </Container>
      </Tab>
    </Tabs>
  )
}

{/* <Container>
                <Row>
                    {
                        techs.map(tech => {
                            return <TechCard key={tech.id} tech={tech} />
                        })
                    }
                </Row>
            </Container> */}