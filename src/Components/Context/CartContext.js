import React from "react";

const CartContext = React.createContext({
  productsList :[],
  modalVisabiilty: false,
  setModalVisability: () => {},
  cartItems: [],
  totalAmount: 0,
  addCartItems: () => {},
  removeCartItems: () => {},
  purchase: () => {},
  
 
});
export default CartContext;
