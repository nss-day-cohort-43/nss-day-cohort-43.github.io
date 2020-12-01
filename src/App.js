import { CardList } from "./components/cards/CardList.js"
import React from "react";
import { NavBar } from './components/nav/NavBar'
import { TechProvider } from './components/technology/TechProvider'
import logo from '../node_modules/startbootstrap-freelancer/src/assets/img/avataaars.svg'
import './App.scss'
<<<<<<< HEAD
import { RSVPButton } from './components/nav/RSVP'
import {HeroArea} from './components/hero/HeroArea'
=======
import { About } from './components/about/About'
>>>>>>> main


import { TabArea } from './components/tabs/TabArea'
import { Thanks } from './components/thanks/Thanks'
import "./scss/styles.scss";
import { Footer } from './components/footer/Footer'
import { SkillProvider } from './components/skills/SkillProvider';

function App() {
  return (
    <div className="App">



      <NavBar />

      <header className="masthead bg-white text-white text-center" id="page-top">
        <div className="container d-flex align-items-center flex-column">
          
          
        </div>
        <HeroArea/>
      </header>

      < About />
      
      <TechProvider>
        <SkillProvider>
          <TabArea />
        </SkillProvider>
      </TechProvider>


      {/* Portfolio Section */}
      <section className="page-section portfolio" id="portfolio">
        <div className="container">

          {/* Portfolio Section Heading */}
          <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Portfolio</h2>

          {/* Icon Divider */}
          <div className="divider-custom">
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
            <div className="divider-custom-line"></div>
          </div>

          {/* Portfolio Grid Items */}
          <div className="row justify-content-center">
            <CardList />
          </div>
          {/* <div className="row justify-content-center">

            
            <div className="col-md-6 col-lg-4 mb-5">
              <tempCardList key="blah" />
            </div>

            
            <div className="col-md-6 col-lg-4 mb-5">
              <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal2">
                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                  <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                </div>
                <img className="img-fluid" src={logo} alt="" />
              </div>
            </div>

            
            <div className="col-md-6 col-lg-4 mb-5">
              <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal3">
                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                  <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                </div>
                <img className="img-fluid" src={logo} alt="" />
              </div>
            </div>
          </div> */}
        </div>
      </section>


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
