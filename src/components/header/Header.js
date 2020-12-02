import React from 'react'
import './Header.scss'

export const Header = () => {
    return (

        <header className="masthead bg-white text-white text-center" id="page-top">
            <div className="container d-flex align-items-center flex-column">
                {/* Masthead Avatar Image */}
                {/* <img className="masthead-avatar mb-5" src={logo} alt="" /> */}
                {/* Masthead Heading */}
                <h1 className="masthead-heading">Hire your next developer</h1>
                {/* Icon Divider */}
                {/* <div className="divider-custom divider-light">
                        <div className="divider-custom-line"></div>
                        <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                        <div className="divider-custom-line"></div>
                    </div> */}
                {/* Masthead Subheading */}
                <p className="masthead-subheading font-weight-light mb-0">Graphic Artist - Web Designer - Illustrator</p>
            </div>
        </header>

    )
}