import React, { useContext } from "react";
import { Button, Container, Row } from "react-bootstrap";
import CartModel from "../UI/CartModal";
import CartItems from "./CartItem";
import CartContext from "../Context/CartContext";

const Cart = () => {
  const ctx = useContext(CartContext);

  // Calculate the total Amount
  const totalAmount = `${ctx.totalAmount.toFixed(2)}`;

  const removeItemHandler = (productId, productPrice) => {
    // Call the removeItem function from CartContext
    ctx.removeCartItems(productId, productPrice);
  };

  const purchaseHandler = () => {
    ctx.purchase();
    alert("Thankyou for Purchase!");
  };

  const cartElements = ctx.cartItems.map((product) => {
    return (
      <CartItems
        key={product.id}
        product={product}
        remmovItem={removeItemHandler}
      />
    );
  });

  return (
    <CartModel>
      <header style={{ fontWeight: "bold" }}>
        <span style={{ marginLeft: "1.5rem" }}>ITEM</span>

        <span style={{ marginLeft: "5rem" }}>PRICE</span>
        <span style={{ marginLeft: "4.5rem" }}> QUANTITY</span>
      </header>
      <Container>
        <Row>{cartElements}</Row>
        <div style={{ marginLeft: "18rem" }}>
          <h5> Total Rs:- {totalAmount}</h5>
        </div>
        <Button onClick={purchaseHandler}>Purchase</Button>
      </Container>
    </CartModel>
  );
};

export default Cart;
