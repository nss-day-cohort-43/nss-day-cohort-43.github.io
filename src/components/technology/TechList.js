import { TechContext } from './TechProvider'
import { TechCard } from './TechCard'
import { useContext, useEffect } from 'react'
import { Container, Row } from 'react-bootstrap'

export const TechList = () => {

    const { techs, getTech } = useContext(TechContext)

    useEffect(() => {
        getTech()
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
            <h3 id="tech-headline" className="tech-text tech-header">Technologies & Skills</h3>
            <p className="tech-text">During the first half of the bootcamp, we all learned and used the following technologies:
</p>
            <Row id="e-row">
                <div className="tech-stack full-width" id="everyone-tech">
                    {
                        techs.map(tech => {
                            return FilterEveryoneTech(tech)
                        })
                    }
                </div>
            </Row>
            <Row id="fe-row">
                <div className="tech-stack" id="front-end-tech">
                    {
                        techs.map(tech => {
                            return FilterUiUxTech(tech)
                        })
                    }
                </div>
                <div id="right-slant"></div>
                <div className="left-aligned">
                    <h4 className="tech-text tech-header">UI/UX</h4>
                    <p className="tech-text">Students in the UI/UX path worked with Figma, Sass, Firebase, and Dribbble to practice prototyping, creating personas, user and usability testing, as well as journey mapping.</p>
                </div>
            </Row>
            <Row id="fs-row">
                <div className="right-aligned">
                    <h4 className="tech-text tech-header">Full-Stack</h4>
                    <p className="tech-text">Students in the Full-Stack path developed in C# with Microsoft.NET, .NET Core, and Visual Studio combined with SQL Server. </p>
                </div>
                <div id="left-slant"></div>
                <div className="tech-stack" id="full-stack-tech">
                    {
                        techs.map(tech => {
                            return FilterFullStackTech(tech)
                        })
                    }
                </div>
            </Row>
        </div>
    )
}