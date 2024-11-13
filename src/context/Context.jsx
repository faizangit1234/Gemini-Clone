import { createContext } from 'react'
import run from '../config/gemini'


// wrap in createContext
export const Context = createContext()

const ContextProvider = (props) => {
    const onSent = async (prompt) => {
        await run(prompt)
    }

    onSent('who is queen in game of thrones')

    const contextValue = {}

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider