import React, { useState, createContext } from "react"

export const TechContext = createContext()

export const TechProvider = props => {
    const [techs, setTech] = useState([])

    const getTech = () => {
        return fetch ("database.json")
        .then(response => response.json())
        .then(data => {
            setTech(data.technology)
    })
    }
    return (
        <TechContext.Provider value={{
            techs, getTech
        }}>
            {props.children}
        </TechContext.Provider>
    )
}