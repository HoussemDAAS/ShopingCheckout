import React from 'react'
import { useContext, createContext } from 'react'

 export const CartContext =createContext({
    items :[],
    addItemToCart : () => {},
    updateCartItemQuantity : () => {},
})

// const ShoppingContext = ({children}) => {
//   return (
//     <CartContext.Provider value={{items :[]}}>
//       {children}
//     </CartContext.Provider>
//   )
// }

// export default ShoppingContext
