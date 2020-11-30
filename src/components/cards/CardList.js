

/**
 * Temporary code to show both card types.
 * Replace with actual CardList Code
 */

import React from 'react';
import { CardHTML } from "./Card.js";
import './customCard.scss';


export const TempCardList = () => {
    const exampleDatabase = [
        {
            firstName: "Rick",
            lastName: "Blake",
            photo: "images/placeholder-images/BlakeRick.jpeg",
            focus: "Full-Stack Developer",
            linkedIn: "https://www.linkedin.com/in/blaker814/",
            github: "https://github.com/blaker814",
            personalSite: "",
            dribbble: "",
            id: 2
        },
        {
            firstName: "Devon",
            lastName: "Cox",
            photo: "images/placeholder-images/CoxDevon.jpeg",
            focus: "UI/UX Front-End Developer",
            linkedIn: "https://www.linkedin.com/in/devonhcox/",
            github: "https://github.com/Devco2011",
            personalSite: "eeeeeee",
            dribbble: "https://dribbble.com/DevCo",
            id: 3
        }
    ]

    const tempCardListHTML = exampleDatabase.map(student => {
        return (
            <>
                <div className="col-md-6 col-lg-4 mb-5">
                    {
                        CardHTML(student)
                    }
                </div>
            </>   
        )
    })

    return tempCardListHTML
}