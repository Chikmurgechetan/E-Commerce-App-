import React, { useState } from "react";
import CartContext from "./CartContext";

const ContextProvider = (props) => {
  const [modalVisabiilty, setModalVisability] = useState(false);

  const objValue = {
    modalVisabiilty: modalVisabiilty,
    setModalVisability: setModalVisability,
  };

  return (
    <CartContext.Provider value={objValue}>
      {props.children}
    </CartContext.Provider>
  );
};

export default ContextProvider;
