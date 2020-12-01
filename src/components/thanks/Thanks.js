import React from 'react'
import './Thanks.scss'
import { RSVPButton } from '../nav/RSVP'

export const Thanks = () => {
    return (
        <section className="page-section bg-primary text-white mb-0" id="thanks">
            <div className="container">
                <h2 className="page-section-heading text-center text-uppercase text-white">A special thank you to...</h2>

                <div className="row" id="btn-space">
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
                    <RSVPButton />
                </div>
            </div>
        </section>
    )
}