import React from 'react'
import './About.scss'

export const About = () => {
    return (
        <section className="page-section bg-primary text-white mb-0" id="about">
            <div className="slanted-about">
                <div class="about-text"><h2 className="page-section-heading text-center text-uppercase text-white">About Us</h2>
                </div>
                <div className="divider-custom divider-light">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>
            </div>
        </section>
    )
}