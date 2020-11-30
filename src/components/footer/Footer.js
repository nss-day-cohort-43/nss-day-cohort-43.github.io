import React from 'react'
import './Footer.scss'

export const Footer = () => {
    return (
        <section className='footerContainer'>
            <footer className="footer text-left">
                <div className="container">
                    <div className="row">

                        {/* Footer Cohort Locations */}
                        <div className="col-lg-6">
                            <h4 className="text-uppercase mb-4">Cohort Member Locations</h4>

                            <p className="lead mb-0">
                                C43 was a remote cohort from start to finish. Here's where all of us lived and worked during our time together.
                            </p>
                            <br />

                            <ul className="cohortLocationsList">
                                <li>Knoxville, TN</li>
                                <li>Murfreesboro, TN</li>
                                <li>Nashville, TN</li>
                                <li>Spring Hill, TN</li>
                                <li>Springfield, TN</li>
                                <li>Richmond, KY</li>
                            </ul>
                        </div>

                        {/* Footer NSS Info */}
                        <div className="col-lg-6">
                            <h4 className="text-uppercase mb-4">About Freelancer</h4>
                            <p className="lead mb-0">
                                Freelance is a free to use, MIT licensed Bootstrap theme created by
                            <a href="http://startbootstrap.com">Start Bootstrap</a>
                            .
                        </p>
                        </div>
                    </div>
                </div>
            </footer>

            <div className="copyright py-4 text-center text-white">
                <div className="container"><small>Copyright © 2021 Nashville Software School Day Cohort 43. All Rights Reserved.</small></div>
            </div>
        </section>
    )
}