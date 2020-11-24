// By Audrey Thomasson

import React, { useEffect, useState } from "react"
import { Card } from 'react-bootstrap';
import { CardHTML } from "./Card"
import { MateContext } from "./MateProvider";

export const CardList = () => {
    const { mates, getMates, searchTerms } = useContext(MateContext)

    // Since you are no longer ALWAYS displaying all of the classmates
    const [ filteredMates, setFiltered ] = useState([])

    // Empty dependency array - useEffect only runs after first render
    useEffect(() => {
        getMates()
    }, [])


    // useEffect dependency array with dependencies - will run if dependency changes (state)
    // Filters for searchTerms and finds the classmate by first OR last name
    // searchTerms will cause a change
    useEffect(() => {
        if (searchTerms !== "") {
            // If the search field is not blank, display matching shots
            const subset = mates.filter(mate => mate.firstName.toLowerCase().includes(searchTerms.toLowerCase()) || mate.lastName.toLowerCase().includes(searchTerms.toLowerCase()))
            setFiltered(subset)
        } else {
            // If the search field is blank, display all shots matching the activeUser
            setFiltered(mates)
        }
    }, [searchTerms, mates])

 


    return (
        <>              
                        <Card.Group itemsPerRow={4} stackable className='cardHolder'>
                        <>
                            {
                            filteredMates.map(mate => {
                                return <CardHTML key={mate.id} mate={mate} />
                            })
                            }
                        </>
                        </Card.Group>


        </>
    )
}