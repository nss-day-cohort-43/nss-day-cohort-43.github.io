
import React, { useEffect, useState } from "react"
// import { Container, Row, Col } from 'react-bootstrap';
import { CardHTML } from "./Card"

export const CardList = () => {
    const [allMates, setAllMates] = useState([])

    // Since you are no longer ALWAYS displaying all of the classmates
    const [ filteredMates, setFiltered ] = useState([])

	const getAllMates = () => {
        // return fetch("http://localhost:8088/cohortMates")
        return fetch ("database.json")
        	.then(response => response.json())
	}
	useEffect(() => {
		getAllMates()
			.then(data => {
				//console.log(data)
				setAllMates(data.cohortMates)
			})
	}, [])


    // Filters for searchTerms and finds the classmate by first OR last name
    // searchTerms will cause a change
    // useEffect(() => {
    //     if (searchTerms !== "") {
    //         // If the search field is not blank, display matching shots
    //         const subset = mates.filter(mate => mate.firstName.toLowerCase().includes(searchTerms.toLowerCase()) || mate.lastName.toLowerCase().includes(searchTerms.toLowerCase()))
    //         setFiltered(subset)
    //     } else {
    //         // If the search field is blank, display all shots matching the activeUser
    //         setFiltered(mates)
    //     }
    // }, [searchTerms, mates])

 


    return (
        <>  
                {
                    allMates.map(mate => {
                        return <>
                            <div className="col-md-6 col-lg-4 mb-5">
                                <CardHTML key={mate.id} mate={mate} />
                            </div>    
                        </>
                    })
                }


        </>
    )
}




// /**
//  * Temporary code to show both card types.
//  * Replace with actual CardList Code
//  */

// import React from 'react';
// import { CardHTML } from "./Card.js";
// import '../../scss/styles.scss';


// export const TempCardList = () => {
//     const exampleDatabase = [
//         {
//             firstName: "Rick",
//             lastName: "Blake",
//             photo: "images/placeholder-images/BlakeRick.jpeg",
//             focus: "Full-Stack Developer",
//             linkedIn: "https://www.linkedin.com/in/blaker814/",
//             github: "https://github.com/blaker814",
//             personalSite: "",
//             dribbble: "",
//             id: 2
//         },
//         {
//             firstName: "Devon",
//             lastName: "Cox",
//             photo: "images/placeholder-images/CoxDevon.jpeg",
//             focus: "UI/UX Front-End Developer",
//             linkedIn: "https://www.linkedin.com/in/devonhcox/",
//             github: "https://github.com/Devco2011",
//             personalSite: "eeeeeee",
//             dribbble: "https://dribbble.com/DevCo",
//             id: 3
//         }
//     ]

//     const tempCardListHTML = exampleDatabase.map(student => {
//         return (
//             <>
//                 <div className="col-md-6 col-lg-4 mb-5">
//                     {
//                         CardHTML(student)
//                     }
//                 </div>
//             </>   
//         )
//     })

//     return tempCardListHTML
// }
