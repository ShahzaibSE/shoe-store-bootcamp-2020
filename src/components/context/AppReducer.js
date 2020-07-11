export default (state, action) => {
   switch(action.type) {
       case "ADD_TO_CART":
           console.log("Added Product in Cart.")
           return {
               ...state,
               cart_products: [action.payload, ...state.cart_products]
           }
       default:
           return state
   }
}