import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import './TabArea.scss'

export const TabArea = () => {
  return (
    <div id="devs">
      <Tabs defaultActiveKey="everyone" id="uncontrolled-tab-example">
        <Tab eventKey="everyone" title="Everyone">

        </Tab>
        <Tab eventKey="uiUx" title="UI/UX">

        </Tab>
        <Tab eventKey="fullstack" title="Full Stack">

        </Tab>
      </Tabs>
    </div>
  )
}