// By Audrey Thomasson

import React, { useEffect, useState } from "react"
import { Container, Row, Col } from 'react-bootstrap';
import { CardHTML } from "./Card"
import './customCard.scss';

export const CardList = () => {
    const [allMates, setAllMates] = useState([])

    // allMates sorted by name
    const [ filteredMates, setFiltered ] = useState([])

	const getAllMates = () => {
        // return fetch("http://localhost:8088/cohortMates")
        return fetch ("database.json")
        	.then(response => response.json())
	}
	useEffect(() => {
		getAllMates()
			.then(data => {
				console.log(data)
				setAllMates(data.cohortMates)
			})
	}, [])

    // sort by name
    useEffect(() => {
        const setFiltered = allMates.sort(function(a, b) {
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
    })

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

 


    return (
        <>  
            <Container class="fluid">           
                <Row>
                    <Col xs={12} s={12} md={6} l={4} xl={4}>
                        <>
                            {
                                filteredMates.map(mate => {
                                    return <CardHTML key={mate.id} mate={mate} />
                                })
                            }
                        </>
                    </Col>
                </Row>

            </Container> 


        </>
    )
}