import React, { useReducer, useState } from "react";
import CartContext from "./CartContext";
import BlackShirt from "../Assets/Black s.jpg";
import SmartWatch from "../Assets/SmartWatch.jpg";
import Jeans from "../Assets/jeans.jpg";
import Shoes from "../Assets/Shoes.jpg";

const ProductArray = [
  {
    id: "p1",
    title: "Product 1",
    price: 1200,
    brand: "Boat",
    color: "Black",
    discription:
      "A Good Smart Watch In this world Indian famius brand smart Watch",
    imageSrc: SmartWatch,
  },
  {
    id: "p2",
    title: "Product 2",
    price: 500,
    brand: "Shirt Beffole",
    color: "Black",
    discription:
      "I Like This Brand Shirt On the My body  for a good Color Quality",
    imageSrc: BlackShirt,
  },

  {
    id: "p3",
    title: "Product 3",
    price: 700,
    brand: "Tomy Jeans",
    color: "Black Gray Dark",
    discription:
      "I like This fitting of the t shirt i love this one size and the color is awsome",
    imageSrc: Jeans,
  },
  {
    id: "p4",
    title: "Product 4",
    price: 1000,
    brand: "Nice One",
    color: "Gray light Color",
    discription:
      "I like This fitting of the t shoes i love this one size and the color is awsome",
    imageSrc: Shoes,
  },
];

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
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity - 1,
      };
      updatedCartItems = [...state.cartItems];
      updatedCartItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedCartItems = state.cartItems.filter(
        (item) => item.id !== action.id
      );
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
  const [cartVisibility, setCartVisibility] = useState(false);

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
    productsList: ProductArray,
    modalVisabiilty: modalVisabiilty,
    setModalVisability: setModalVisability,
    cartItems: cartState.cartItems,
    totalAmount: cartState.totalAmount,
    addCartItems: addItemToCartHandler,
    removeCartItems: removeItemFromCartHandler,
    purchase: purchaseHandler,
    cartVisibility:cartVisibility,
    setCartVisibility:setCartVisibility,
  
   
  };

  return (
    <CartContext.Provider value={objValue}>
      {props.children}
    </CartContext.Provider>
  );
};

export default ContextProvider;
