import { useEffect, useState } from "react"
import { CardList } from './cards/CardList';
import { Container, Row } from 'react-bootstrap'

export const CheckboxView = () => {
	const [allMates, setAllMates] = useState([]);
	const [showMates, setShowMates] = useState([]);
	//checkbox view
	const [checkUX, setCheckUX] = useState(false);
    const [checkFS, setCheckFS] = useState(true);
    
	 // function to make call to database to get all the classmates
	 const getAllMates = () => {
		return fetch ("database.json")
		  .then(response => response.json())
	}
	// function to alphabetize by first name to create filtered list of all classmates
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
    
	useEffect(() => {
		getAllMates()
		  .then(data => {
			setAllMates(filterNames(data.cohortMates))
		  })
	  }, [])
	  useEffect(() => {
		if(checkUX && checkFS){
			setShowMates(allMates)
		}else if(checkUX && !checkFS){
			setShowMates(allMates.filter(mate => mate.focus.includes('UI/UX')))
		}else if(!checkUX && checkFS){
			setShowMates(allMates.filter(mate => mate.focus.includes('Full-Stack')))
        }else if(!checkUX && !checkFS){
        setShowMates(allMates)
    }
	}, [checkUX, checkFS])
    
    
    return (
		<>
		<Container id="classmates">
		<Row id="classmates-container">
		  <CardList filteredMates={showMates} />
		</Row>
	  </Container>
	  </>
	)
}