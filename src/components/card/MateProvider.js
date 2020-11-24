import React, { useState, createContext } from "react"

/*
    The context is imported and used by individual components
    that need data
*/
export const MateContext = createContext()

/*
 This component establishes what data can be used.
 */
export const MateProvider = (props) => {
    const [mates, getMates] = useState([])
    const [ searchTerms, setSearchTerms ] = useState("")

    const getMates = () => {
        return fetch("http://localhost:8088/cohortMates")
            .then(res => res.json())
            .then(setMates)
    }

    const getMatesByFocus = (focus) => {
        return fetch(`http://localhost:8088/cohortMates?focus=${focus}`)
            .then(res => res.json())
            .then(setMates)
    }

    return (
        <MateContext.Provider value={{
            mates, getMates, getMatesByFocus, searchTerms, setSearchTerms
        }}>
            {props.children}
        </MateContext.Provider>
    )
}