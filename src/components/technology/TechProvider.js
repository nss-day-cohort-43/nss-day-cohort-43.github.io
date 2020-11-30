import React, { useState, createContext } from "react"

export const TechContext = createContext()

export const TechProvider = props => {
    const [techs, setTech] = useState([])

    const getTech = () => {
        return fetch (`http://localhost:8088/technology`)
        .then(response => response.json())
        .then(setTech)
    }

    return (
        <TechContext.Provider value={{
            techs, getTech
        }}>
            {props.children}
        </TechContext.Provider>
    )
}