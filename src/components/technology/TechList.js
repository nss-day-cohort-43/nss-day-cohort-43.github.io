import { TechContext } from './TechProvider'
import { TechCard } from './TechCard'
// import { SkillContext } from '../skills/SkillProvider.js'
import React, { useEffect, useContext } from "react"
// import { Container, Row } from 'react-bootstrap'

export const TechList = () => {

    // const { skills, getSkill} = useContext(SkillContext)
    const { techs, getTech } = useContext(TechContext)


    useEffect(() => {
        getTech()
        // getSkill()
    }, [])

    const FilterEveryoneTech = (obj) => {
        if (obj.learnedBy === "everyone") {
            return <TechCard key={obj.id} tech={obj} />
        }
    }

    const FilterUiUxTech = (obj) => {
        if (obj.learnedBy === "ui-ux") {
            return <TechCard key={obj.id} tech={obj} />
        }
    }
    const FilterFullStackTech = (obj) => {
        if (obj.learnedBy === "full-stack") {
            return <TechCard key={obj.id} tech={obj} />
        }
    }


    return (
        <div id="tech-section">
            <h3 id="tech-headline" className="tech-header">Technologies & Skills</h3>
            <div className="row1" id="e-row">
                <h4 className="tech-text-subheadline">What we all learned</h4>
                {/* <p className="tech-text-subheadline">During the first half of the bootcamp, we all learned and used the following technologies:</p> */}
                <div className="e-icons-box">
                    <div className="tech-stack full-width" id="everyone-tech">
                        {
                            techs.map(tech => {
                                return FilterEveryoneTech(tech)
                            })
                        }

                    </div>
                </div>
            </div>
            <div className="row1" id="fe-row">
                <div className="tech-stack" id="front-end-tech">
                    {
                        techs.map(tech => {
                            return FilterUiUxTech(tech)
                        })
                    }
                </div>
                    
                <div className="fe-left-aligned">
                    <h4 className="tech-header">UI/UX</h4>
                    <p className="tech-text">Students worked with Figma, Sass, and Firebase to practice <span className="yellow">prototyping</span>, creating <span className="yellow">personas</span>, <span className="yellow">user and usability testing</span>, and <span className="yellow">journey mapping</span>.</p>
                </div>
            </div>
            <div className="row1" id="fs-row">
                <div className="fs-right-aligned">
                    <h4 className="tech-header">Full-Stack</h4>
                    <p className="tech-text">Students developed in C# with Microsoft.NET, .NET Core, and Visual Studio combined with SQL Server. </p>
                </div>
                <div className="tech-stack" id="full-stack-tech">
                    {
                        techs.map(tech => {
                            return FilterFullStackTech(tech)
                        })
                    }
                </div>
            </div>
        </div>
    )
}