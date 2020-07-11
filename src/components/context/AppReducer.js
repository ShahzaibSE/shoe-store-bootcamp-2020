export default (state, action) => {
   switch(action.type) {
       case "ADD_TO_CART":
           return {
               ...state,
               cart_products: [action.payload, ...state.cart_products]
           }
        case "CHECKOUT_CART":
            return {
                ...state,
                cart_products: []
            }   
       default:
           return state
   }
}