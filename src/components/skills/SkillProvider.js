import React, { useState, createContext } from "react"

export const SkillContext = createContext()

export const SkillProvider = props => {
    const [skills, setSkill] = useState([])

    const getSkill = () => {
        return fetch ("database.json")
        .then(response => response.json())
        .then(data => {
            setSkill(data.softSkills)
    })
    }

    return (
        <SkillContext.Provider value={{
            skills, getSkill
        }}>
            {props.children}
        </SkillContext.Provider>
    )
}