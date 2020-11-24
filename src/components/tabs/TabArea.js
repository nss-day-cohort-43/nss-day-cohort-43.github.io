import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

export const TabArea = () => {
    return ( 
<Tabs defaultActiveKey="everyone" id="uncontrolled-tab-example">
  <Tab eventKey="everyone" title="Everyone">
    
  </Tab>
  <Tab eventKey="uiUx" title="UI/UX">
    
  </Tab>
  <Tab eventKey="fullstack" title="Full Stack">
    
  </Tab>
</Tabs>
)
}