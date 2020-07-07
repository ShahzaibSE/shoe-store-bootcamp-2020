import React, {createContext, useReducer} from "react"
import AppReducer from "./AppReducer"
// Data.
import shoes from "./../data/data"
//
const initialState = { 
    products: shoes
}
/*
.
.
.
.
*/
// Create Global Context.
export const globalContext = createContext(initialState)
/*
.
.
.
*/
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer,initialState)
    return(
        <globalContext.Provider value={
            {
                products: state.products
            }
        }
        >
            {children}
        </globalContext.Provider>
    )
}