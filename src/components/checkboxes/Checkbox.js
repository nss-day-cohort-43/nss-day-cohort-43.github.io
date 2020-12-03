import { useEffect, useState } from "react"
import { Container, Row, InputGroup, FormControl } from 'react-bootstrap'
import { CardList } from "../cards/CardList";
import './Checkbox.scss'

export const CheckboxView = () => {
	const [allMates, setAllMates] = useState([]);
	const [showMates, setShowMates] = useState([]);
	//checkbox view
	const [checkFE, setCheckFE] = useState(true);
	const [checkBE, setCheckBE] = useState(true);
	
	// function to make call to database to get all the classmates
	 const getAllMates = () => {
		return fetch ("database.json")
		  .then(response => response.json())
	}
	const handleCheckChange = (event) => {
		//first confirm that at least one is true
		if(event.target.name === "FEWDD"){
			const newValue = checkFE ? false : true;
			if(!checkBE && !newValue){
				//both are false so set them both to true
				setCheckFE(true);
				setCheckBE(true);
			}else{
				setCheckFE(newValue)
			}
		}else if(event.target.name === "BEWD"){
			const newValue = checkBE ? false: true;
			if(!checkFE && !newValue){
				//both are false so set them both to true
				setCheckFE(true);
				setCheckBE(true);
			}else{
				setCheckBE(newValue)
			}
		}
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
		if(checkFE && checkBE){
			setShowMates(allMates)
		}else if(checkFE && !checkBE){
			setShowMates(allMates.filter(mate => mate.focus.includes('UI/UX')))
		}else if(!checkFE && checkBE){
			setShowMates(allMates.filter(mate => mate.focus.includes('Full-Stack')))
		}
	}, [checkFE, checkBE, allMates])
	
	return (
		<>
			<section id="checkbox">
				<h3>What are you looking for?</h3>
				<div className="container front">
					
					<label className="FEText container">Front-End UI/UX Developer
						<input type="checkbox" className="checkbox" name="FEWDD" checked={checkFE} 
						onChange={(event) => handleCheckChange(event)}/>
						<span class="checkmark"></span>
					</label>
				</div>
				<div className="container full">
						<InputGroup.Checkbox className="checkmark1" name="BEWD" checked={checkBE} 
						onChange={(event) => handleCheckChange(event)}/>
						<label className="FSText">Full-Stack C# Developer</label>
				
				</div>
			</section>

			<Container id="classmates">
				<Row id="classmates-container">
					<CardList filteredMates={showMates} />
				</Row>
			</Container>
	  </>
	)
}

{/* <h1>What are you looking for?</h1>
<label class="container">Front-End UI/UX Developer
  <input type="checkbox" checked="checked">
  <span class="checkmark"></span>
</label>

<label class="container">Full-Stack C# Developer
  <input type="checkbox">
  <span class="checkmark1"></span>
</label> */}

{/* <div className="container front">
					
					<InputGroup.Checkbox className="checkmark" name="FEWDD" checked={checkFE} 
					onChange={(event) => handleCheckChange(event)}/>
					<label className="FEText">Front-End UI/UX Developer</label>
			</div>
			<div className="container full">
					<InputGroup.Checkbox className="checkmark1" name="BEWD" checked={checkBE} 
					onChange={(event) => handleCheckChange(event)}/>
					<label className="FSText">Full-Stack C# Developer</label>
			
			</div> */}