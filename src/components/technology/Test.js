import React, { useEffect, useContext } from "react"
import { TechContext } from './TechProvider'
import { TechCard } from './TechCard'

export const Test = () => {
	


	return (
		<>
		<h3>Test</h3>
		<div className="container" style={{background:"lightblue"}}>
			<div className="row">
				<div className="col-5">
					<div className="row flex-nowrap">
						<div className="iconbox text-center col">
							<a href="https://google.com" target="_blank" rel="noreferrer">
								<img src="./icons/CSharp.png" className="img-icon mx-auto d-block" alt="test" />
							</a>
							<h4 className="text-center" id="tech-card-text">Javascript</h4>
						</div>
						<div className="iconbox text-center col">
							<a href="https://google.com" target="_blank" rel="noreferrer">
								<img src="./icons/CSharp.png" className="img-icon mx-auto d-block" alt="test" />
							</a>
							<h4 className="text-center" id="tech-card-text">Javascript</h4>
						</div>
						<div className="iconbox text-center col">
							<a href="https://google.com" target="_blank" rel="noreferrer">
								<img src="./icons/CSharp.png" className="img-icon mx-auto d-block" alt="test" />
							</a>
							<h4 className="text-center" id="tech-card-text">Javascript</h4>
						</div>
						<div className="iconbox text-center col">
							<a href="https://google.com" target="_blank" rel="noreferrer">
								<img src="./icons/CSharp.png" className="img-icon mx-auto d-block" alt="test" />
							</a>
							<h4 className="text-center" id="tech-card-text">Javascript</h4>
						</div>
						
						</div>
				</div>
				<div className="col-7">
				<h4 className="tech-header">UI/UX</h4>
				<p className="tech-text">With a focus on the <em>User</em>, students worked with Figma, Sass, and Firebase to practice prototyping, creating personas, user and usability testing, and journey mapping.</p>
				</div>
			</div>

			<div className="row">
				<div>icons</div>
				<div>Text</div>
			</div>
		</div>
		</>
	)
}
