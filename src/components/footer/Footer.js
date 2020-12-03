import React from 'react'

export const Footer = () => {
    return (
        <section className='footerContainer'>
            <footer className="footer text-left">
                <div className="container">
                    <div className="row">

                        {/* Footer Cohort Locations */}
                        <div className="col-lg-6 mb-5 mb-md-0">
                            <h4 className="text-uppercase mb-4">Cohort Member Locations</h4>

                            <p className="lead mb-0">
                                C43 was a remote cohort from start to finish. Here's where all of us lived and worked during our time together:
                            </p>
                            <br />

                            <ul className="cohortLocationsList">
                                <li>Joelton, TN</li>
                                <li>Franklin, TN</li>
                                <li>Knoxville, TN</li>
                                <li>Lebanon, TN</li>
                                <li>Murfreesboro, TN</li>
                                <li>Nashville, TN</li>
                                <li>Spring Hill, TN</li>
                                <li>Springfield, TN</li>
                                <li>Richmond, KY</li>
                                <li>Tallahassee, FL</li>
                            </ul>
                        </div>

                        {/* Footer NSS Info */}
                        <div className="col-lg-6">
                            <h4 className="text-uppercase mb-4">About NSS</h4>
                            <p className="lead mb-0">
                                Nashville Software School is a Tennessee non-profit corporation.
                                Our mission is to expand the technology workforce in middle Tennessee by providing motivated individuals
                                with access to a career in software development through training, mentorship, and learning-by-doing.
                            </p>

                            <br />

                            <p className="lead mb-0">
                                <a href="http://nashvillesoftwareschool.com/" target="_blank" className="learnMoreBtn">
                                    Learn More
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </footer>

            <div className="copyright py-4 text-center text-white">
                <div className="container"><small>Copyright © {new Date().getFullYear()} Nashville Software School Day Cohort 43. All Rights Reserved.</small></div>
            </div>
        </section>
    )
}