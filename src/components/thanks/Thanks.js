import React from 'react'
import './Thanks.scss'
import { RSVPButton } from '../nav/RSVP'

export const Thanks = () => {
    return (
        <section className="page-section bg-primary text-white mb-0" id="thanks">
            <div className="container">
                <h2 className="page-section-heading text-center text-white">A special thank you to...</h2>

                <div className="divider-custom divider-light">
                    <div className="divider-custom-line"></div>
                </div>

                <div className="row">
                    <div className="col-lg-6 ml-auto">
                        <h4 className="lead thanksLead">
                            <strong>Brenda Long, Adam Sheaffer, & Sage Klein</strong>
                        </h4>

                        <p className="lead thanksLead">
                            Cupcake ipsum dolor. Sit amet soufflé sesame snaps marshmallow gummies. Cookie oat cake cotton candy candy pudding ice cream chocolate bar toffee croissant.
                        </p>
                    </div>

                    <div className="col-lg-6 mr-auto">
                        <h4 className="lead thanksLead">
                            <strong>John Wark</strong>
                        </h4>

                        <p className="lead thanksLead">
                            Cupcake ipsum dolor. Sit amet soufflé sesame snaps marshmallow gummies. Cookie oat cake cotton candy candy pudding ice cream chocolate bar toffee croissant.
                        </p>
                    </div>
                </div>

                <div className="text-center mt-4">
                    <RSVPButton />
                </div>
            </div>
        </section>
    )
}