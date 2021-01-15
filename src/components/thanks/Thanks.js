import React from 'react'
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
                            <strong>
                                Brenda Long, Adam Sheaffer, Sage Klein, Tyler Hilliard, Erik Lindstrom, &Rose Wisotzky
                            </strong>
                        </h4>

                        <p className="lead thanksLead">
                            ...for introducing us to the world of development and leading us into our journey of lifelong learning. For helping us build a solid foundation on front-end development. For guiding us through our second programming language and demystifying server-side code. For showing us how important the user truly is when designing experiences. For the constant encouragement and positive attitude. Every day, you supported us, answered our questions, and kept our spirits high. And, as Jeff would say: God help us, we're in the hands of engineers.
                        </p>
                    </div>

                    <div className="col-lg-6 mr-auto">
                        <h4 className="lead thanksLead">
                            <strong>The entire NSS team</strong>
                        </h4>

                        <p className="lead thanksLead">
                            Steve Brownlee, Ashley Canino, Jisie David, Jessica Grande, Julie Heckler, Marla Lamont, Kristen McKinney, Jeremiah Vasquez, and John Wark
                        </p>
                        <br></br>
                        <h4 className="lead thanksLead">
                            <strong>All of our guest speakers</strong>
                        </h4>


                        <p className="lead thanksLead">
                            Kimmy Bird, Caroline Brownlee, Pavel Bukengoltz, Taylor Desseyn, Gradi Ellis, Tom Johnson, John Long, Lindsay Mulhollen, Daniel Reid, Chandler Turner, and Matt Walkley
                        </p>
                    </div>
                </div>


                <div className="text-center mt-4">
                    <RSVPButton />
                </div>
            </div>
        </section >
    )
}