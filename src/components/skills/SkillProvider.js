import React, { useState, createContext } from "react"

export const SkillContext = createContext()

export const SkillProvider = props => {
    const [skills, setSkill] = useState([])

    const getSkill = () => {
        return fetch (`http://localhost:8088/softSkills`)
        .then(response => response.json())
        .then(setSkill)
    }

    return (
        <SkillContext.Provider value={{
            skills, getSkill
        }}>
            {props.children}
        </SkillContext.Provider>
    )
}