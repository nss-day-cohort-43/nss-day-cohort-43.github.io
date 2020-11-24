import React from 'react'
import './Thanks.scss'

export const Thanks = () => {
    return (
        <section className="page-section bg-primary text-white mb-0" id="thanks">
            <div className="container">
                <h2 className="page-section-heading text-center text-uppercase text-white">A special thank you to...</h2>

                <div className="divider-custom divider-light">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>

                <div className="row">
                    <div className="col-lg-6 ml-auto">
                        <p className="lead thanksLead">
                            <strong>Brenda Long, Adam Sheaffer, & Sage Klein</strong>
                        </p>

                        <p className="lead thanksLead">
                            Cupcake ipsum dolor. Sit amet soufflé sesame snaps marshmallow gummies. Cookie oat cake cotton candy candy pudding ice cream chocolate bar toffee croissant.
                        </p>
                    </div>

                    <div className="col-lg-6 mr-auto">
                        <p className="lead thanksLead">
                            <strong>John Wark</strong>
                        </p>

                        <p className="lead thanksLead">
                            Cupcake ipsum dolor. Sit amet soufflé sesame snaps marshmallow gummies. Cookie oat cake cotton candy candy pudding ice cream chocolate bar toffee croissant.
                        </p>
                    </div>
                </div>

                <div className="text-center mt-4">
                    <a className="btn btn-xl btn-outline-light" href="https://startbootstrap.com/theme/freelancer/">
                        <i className="fas fa-download mr-2"></i>
                        RSVP for Demo Day!
                    </a>
                </div>
            </div>
        </section>
    )
}