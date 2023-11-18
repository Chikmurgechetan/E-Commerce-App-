import React, { useReducer, useState } from "react";
import CartContext from "./CartContext";

const defaultCartState = {
  cartItems: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const existingCartItemIndex = state.cartItems.findIndex(
      (item) => item.id === action.item.id
    );

    if (existingCartItemIndex !== -1) {
      const updatedCartItems = [...state.cartItems];
      const existingCartItem = updatedCartItems[existingCartItemIndex];
      existingCartItem.quantity += action.item.quantity;

      return {
        cartItems: updatedCartItems,
        totalAmount:
          state.totalAmount + action.item.price * action.item.quantity,
      };
    } else {
      return {
        cartItems: state.cartItems.concat(action.item),
        totalAmount:
          state.totalAmount + action.item.price * action.item.quantity,
      };
    }
  } else if (action.type === "REMOVE") {
    const existingCartItemIndex = state.cartItems.findIndex(
      (item) => item.id === action.id
    );

    const existingCartItem = state.cartItems[existingCartItemIndex];
    const updatedTotalAmount = state.totalAmount - existingCartItem.price;

    let updatedCartItems;

    if (existingCartItem.quantity > 1) {
      const updatedItem = { ...existingCartItem, quantity: existingCartItem.quantity - 1 };
      updatedCartItems = [...state.cartItems];
      updatedCartItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedCartItems = state.cartItems.filter((item) => item.id !== action.id);
    }

    return {
      cartItems: updatedCartItems,
      totalAmount: updatedTotalAmount,
    };
  } else if (action.type === "PURCHASE") {
    return {
      cartItems: [],
      totalAmount: 0,
    };
  }
  
  // If the action type is not recognized, return the current state
  return state;
};

const ContextProvider = (props) => {
  const [modalVisabiilty, setModalVisability] = useState(false);

  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };
  const purchaseHandler = () => {
    dispatchCartAction({ type: "PURCHASE" });
  };


  const objValue = {
    modalVisabiilty: modalVisabiilty,
    setModalVisability: setModalVisability,
    cartItems: cartState.cartItems,
    totalAmount: cartState.totalAmount,
    addCartItems: addItemToCartHandler,
    removeCartItems: removeItemFromCartHandler,
    purchase:purchaseHandler
  };

  return (
    <CartContext.Provider value={objValue}>
      {props.children}
    </CartContext.Provider>
  );
};

export default ContextProvider;
