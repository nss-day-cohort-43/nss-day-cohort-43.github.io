import logo from '../node_modules/startbootstrap-freelancer/src/assets/img/avataaars.svg'
import './App.scss'

function App() {
  return (
    <div className="App">
      {/* Navigation */}
      <nav className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
        <div className="container">
          <a className="navbar-brand js-scroll-trigger" href="#page-top">Start Bootstrap</a>
          <button className="navbar-toggler navbar-toggler-right text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            Menu
                    <i className="fas fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#portfolio">Portfolio</a></li>
              <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#about">About</a></li>
              <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>

      <header className="masthead bg-primary text-white text-center">
        <div className="container d-flex align-items-center flex-column">
          {/* Masthead Avatar Image */}
          <img className="masthead-avatar mb-5" src={logo} alt="" />
          {/* Masthead Heading */}
          <h1 className="masthead-heading text-uppercase mb-0">Start Bootstrap</h1>
          {/* Icon Divider */}
          <div className="divider-custom divider-light">
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
            <div className="divider-custom-line"></div>
          </div>
          {/* Masthead Subheading */}
          <p className="masthead-subheading font-weight-light mb-0">Graphic Artist - Web Designer - Illustrator</p>
        </div>
      </header>
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

            {/* Portfolio Item 1 */}
            <div className="col-md-6 col-lg-4 mb-5">
              <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal1">
                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                  <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                </div>
                <img className="img-fluid" src={logo} alt="" />
              </div>
            </div>

            {/* Portfolio Item 2 */}
            <div className="col-md-6 col-lg-4 mb-5">
              <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal2">
                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                  <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                </div>
                <img className="img-fluid" src={logo} alt="" />
              </div>
            </div>

            {/* Portfolio Item 3 */}
            <div className="col-md-6 col-lg-4 mb-5">
              <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal3">
                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                  <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                </div>
                <img className="img-fluid" src={logo} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="page-section bg-primary text-white mb-0" id="about">
        <div className="container">

          {/*} About Section Heading */}
          <h2 className="page-section-heading text-center text-uppercase text-white">About</h2>

          {/* Icon Divider */}
          <div className="divider-custom divider-light">
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
            <div className="divider-custom-line"></div>
          </div>

          {/* About Section Content */}
          <div className="row">
            <div className="col-lg-4 ml-auto"><p className="lead">Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p></div>
            <div className="col-lg-4 mr-auto"><p className="lead">You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p></div>
          </div>

          {/* About Section Button */}
          <div className="text-center mt-4">
            <a className="btn btn-xl btn-outline-light" href="https://startbootstrap.com/theme/freelancer/">
              <i className="fas fa-download mr-2"></i>
                        Free Download!
                    </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
