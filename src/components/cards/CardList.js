// By Audrey Thomasson

import React, { useEffect, useState } from "react"
import { CardHTML } from "./Card"
import './customCard.scss';

export const CardList = () => {
    const [allMates, setAllMates] = useState([])

    // allMates sorted by tab selection
    const [ filteredMates, setFiltered ] = useState([])

    // function to make call to database to get all the classmates
    const getAllMates = () => {
        return fetch ("database.json")
        	.then(response => response.json())
    }
    
    // setting all the classmates
	useEffect(() => {
		getAllMates()
			.then(data => {
                setAllMates(filterNames(data.cohortMates))
				
			})
	}, [])

    // alphabetize by first name to create filtered list of all classmates
    const filterNames = (allMates) => {
        const alphaMates = allMates.sort(function(a, b) {
        const nameA = a.firstName.toUpperCase(); // ignore upper and lowercase
        const nameB = b.firstName.toUpperCase(); // ignore upper and lowercase
            if (nameA < nameB) {
            return -1;
            }
            if (nameA > nameB) {
            return 1;
            }
            // names must be equal
            return 0;
        })
        return alphaMates
    }
   

    // // Filters for searchTerms and finds the classmate by first OR last name
    // // searchTerms will cause a change
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

    // Filters for selected Tab
    // Selected Tab will cause a change
    useEffect(() => {
        if (selectedTab === "uiUx") {
            // If the search field is not blank, display matching shots
            const uiUxSubset = allMates.filter(mate => mate.focus.includes('UI/UX'))
            setFiltered(uiUxSubset)

        } else if (selectedTab === "fullstack") {
            const fullStackSubset = allMates.filter(mate => mate.focus.includes('Full-Stack'))
            setFiltered(fullStackSubset)

         } else {
            // If the tab is the Everyone Tab, display all students
            setFiltered(allMates)
        }
    }, [selectedTab, allMates])

 


    return (
        <>  
            {filteredMates.map(mate => {
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