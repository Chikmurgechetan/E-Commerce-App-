import React from "react";

const CartContext = React.createContext({
    modalVisabiilty : false,
    setModalVisability : () =>{},
    cartItems : [],
    totalAmount: 0,
    addCartItems : () =>{},
    removeCartItems : () => {},
    purchase:() =>{},
     cartVisability : false

})
export default CartContext;