import React from "react";
import { NavBar } from './components/nav/NavBar'
import { Header } from './components/header/Header'
import { Thanks } from './components/thanks/Thanks'
import "./scss/styles.scss";
import { Footer } from './components/footer/Footer'
import { CheckboxView } from "./components/checkboxes/Checkbox";
import { TechProvider } from "./components/technology/TechProvider.js";
import { TechList } from "./components/technology/TechList.js";
// 
//        
//       <TechProvider>
//         <TechList />
//       </TechProvider>
//       <Test />
//       <Thanks />
//       <Footer />

function App() {
  return (
    <div className="App"> 
      <NavBar />
      <Header />
      <CheckboxView />
      <TechProvider>
        <TechList />
      </TechProvider>
      <Thanks />
      <Footer />
      {/* Scroll to Top Button (Only visible on small and extra-small screen sizes) */}
      <div className="scroll-to-top d-lg-none position-fixed">
        <a className="js-scroll-trigger d-block text-center text-white rounded" href="#page-top"><i className="fa fa-chevron-up"></i></a>
      </div>
    </div>

  )
}

export default App
