import React, {createContext, useReducer} from "react"
import AppReducer from "./AppReducer"
// Data.
import shoes from "./../data/data"
//
const initialState = { 
    products: shoes,
    cart_products: []
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

    function add_to_cart(cart_product) {
        dispatch(
            {
                type: "ADD_TO_CART",
                payload:cart_product
            })
    }
    //
    function delete_cart_product(product_id) {
        dispatch({
            type:"DELETE_CART_PRODUCT",
            payload: product_id
        })
    }
    //
    function checkout_cart() {
        dispatch(
            {
                type: "CHECKOUT_CART",
                payload:[]
            })
    }

    return(
        <globalContext.Provider value={
            {
                products: state.products,
                cart_products: state.cart_products,
                add_to_cart,
                checkout_cart,
                delete_cart_product
            }
        }
        >
            {children}
        </globalContext.Provider>
    )
}