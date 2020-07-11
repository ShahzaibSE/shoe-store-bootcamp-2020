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
        case "DELETE_CART_PRODUCT":
            return {
                ...state,
                cart_products: state.cart_products.filter( cart_product => cart_product.id !== action.payload)
            }    
       default:
           return state
   }
}