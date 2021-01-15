import { useEffect, useState } from "react"
import { Container, Row, InputGroup, FormControl } from 'react-bootstrap'
import { CardList } from "../cards/CardList";

export const CheckboxView = () => {
	const [allMates, setAllMates] = useState([]);
	const [showMates, setShowMates] = useState([]);

	//checkbox view
	const [checkFE, setCheckFE] = useState(false);
	const [checkBE, setCheckBE] = useState(false);

	// function to make call to database to get all the classmates
	const getAllMates = () => {
		return fetch("database.json")
			.then(response => response.json())
	}
	const handleCheckChange = (event) => {
		//first confirm that at least one is true
		if (event.target.name === "FEWD") {
			const newValue = checkFE ? false : true;
			if (!checkBE && !newValue) {
				//both are false so set them both to true
				setCheckFE(true);
				setCheckBE(true);
			} else {
				setCheckFE(newValue)
			}
		} else if (event.target.name === "BEWD") {
			const newValue = checkBE ? false : true;
			if (!checkFE && !newValue) {
				//both are false so set them both to true
				setCheckFE(true);
				setCheckBE(true);
			} else {
				setCheckBE(newValue)
			}
		}
	}
	// function to alphabetize by first name to create filtered list of all classmates
	const filterNames = (allMates) => {
		const alphaMates = allMates.sort(function (a, b) {
			const nameA = a.lastName.toUpperCase(); // ignore upper and lowercase
			const nameB = b.lastName.toUpperCase(); // ignore upper and lowercase
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

	// Get all the classmates from the database
	useEffect(() => {
		getAllMates()
			.then(data => {
				setAllMates(filterNames(data.cohortMates))
			})
	}, [])
	useEffect(() => {
		if (checkFE && checkBE) {
			setShowMates(allMates)
		} else if (!checkFE && !checkBE) {
			setShowMates(allMates)
		} else if (checkFE && !checkBE) {
			setShowMates(allMates.filter(mate => mate.focus.includes('UI/UX')))
		} else if (!checkFE && checkBE) {
			setShowMates(allMates.filter(mate => mate.focus.includes('Full-Stack')))
		}
	}, [checkFE, checkBE, allMates])

	return (
		<>
			<section id="boxes" className="container">
				<h3>What are you looking for?</h3>
				<div className="Rectangle FE">
					<h2 className="FEText">Front-End UI/UX Developer</h2>
					<label className="checkbox">
						<input type="checkbox" name="FEWD" checked={checkFE}
							onChange={(event) => handleCheckChange(event)} />
						<span className="info"></span>
					</label>
				</div>

				<div className="Rectangle Full">
					<h2 className="FSText">Full-Stack C# Developer</h2>
					<label className="checkbox">
						<input type="checkbox" className="checkbox" name="BEWD" checked={checkBE}
							onChange={(event) => handleCheckChange(event)} />
						<span className="warning"></span>
					</label>

				</div>

			</section>

			<Container id="classmates">
				<div className="devHeader"><h3>Cohort 43 Developers</h3></div>
				<Row id="classmates-container">
					<CardList filteredMates={showMates} />
				</Row>
			</Container>
		</>
	)
}