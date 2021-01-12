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
        <div id="tech">
            <div className="container">
            <h3 id="tech-headline" className="tech-header">Technologies & Skills</h3>
            <div className="row" id="e-row">
                <h4 className="tech-text-subheadline">Everyone learned</h4>
                <div>
                    <div className="container">
                    <div className="row justify-content-center">
                        {
                            techs.map(tech => {
                                return FilterEveryoneTech(tech)
                            })
                        }

                    </div>
                    </div>
                </div>
            </div>



           

            <div className="container" id="fe-row">
                <div className="tech-stack row" id="front-end-tech">
                    <div className="col-4">
                        <div className="row flex-nowrap justify-content-end">
                            {
                                techs.map(tech => {
                                    return FilterUiUxTech(tech)
                                })
                            }
                        </div>
                    </div>
                    <div className="fe-left-aligned col-5">
                        <h4 className="tech-header">UI/UX</h4>
                        <p className="tech-text">With a focus on the <em>User</em>, students worked with Figma, Sass, and Firebase to practice prototyping, creating personas, user and usability testing, and journey mapping.</p>
                    </div>

                </div>
            </div>



            <div className="container" id="fs-row">
                <div className="tech-stack row" id="front-end-tech">
                    <div className="col-4">
                        <div className="row flex-nowrap">
                            {
                                techs.map(tech => {
                                    return FilterFullStackTech(tech)
                                })
                            }
                        </div>
                    </div>
                    <div className="fe-left-aligned col-5">
                        <h4 className="tech-header">Full-Stack</h4>
                        <p className="tech-text">Students developed in C# with Microsoft.NET, .NET Core, and Visual Studio combined with SQL Server. </p>
                    </div>

                </div>
            </div>

            </div>
       
</div>




        // <div id="tech">
        //     <div className="container">
        //     <h3 id="tech-headline" className="tech-header">Technologies & Skills</h3>
        //     <div className="row1" id="e-row">
        //         <h4 className="tech-text-subheadline">Everyone learned</h4>
        //         {/* <p className="tech-text-subheadline">During the first half of the bootcamp, we all learned and used the following technologies:</p> */}
        //         <div className="e-icons-box">
        //             <div className="tech-stack full-width" id="everyone-tech">
        //                 {
        //                     techs.map(tech => {
        //                         return FilterEveryoneTech(tech)
        //                     })
        //                 }

        //             </div>
        //         </div>
        //     </div>



        //     <div className="row1" id="fe-row">
        //         <div className="tech-stack" id="front-end-tech">
        //             {
        //                 techs.map(tech => {
        //                     return FilterUiUxTech(tech)
        //                 })
        //             }
        //         </div>
                    
        //         <div className="fe-left-aligned">
        //             <h4 className="tech-header">UI/UX</h4>
        //             <p className="tech-text">With a focus on the <em>User</em>, students worked with Figma, Sass, and Firebase to practice prototyping, creating personas, user and usability testing, and journey mapping.</p>
        //         </div>
        //     </div>



        //     <div className="row1" id="fs-row">
        //         <div className="tech-stack" id="front-end-tech">
        //             {
        //                 techs.map(tech => {
        //                     return FilterFullStackTech(tech)
        //                 })
        //             }
        //         </div>
        //         <div className="fe-left-aligned">
        //             <h4 className="tech-header">Full-Stack</h4>
        //             <p className="tech-text">Students developed in C# with Microsoft.NET, .NET Core, and Visual Studio combined with SQL Server. </p>
        //         </div>
        //     </div>

        //     </div>
        // </div>
    )
}