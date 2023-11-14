import React from "react";
import { Container, Row } from "react-bootstrap";
import CartModel from "../UI/CartModal";
import CartItems from "./Carttems";

const Cart = () => {
  const cartElements = [
    {
      id: "c1",
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
      quantity: 2,
    },
    {
      id: "c2",
      title: "Black and white Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
      quantity: 3,
    },
    {
      id: "c3",
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
      quantity: 1,
    },
  ];

  return (
    <CartModel>
      <Container>
        <Row>
         {
          cartElements.map((product)=>{
            return <CartItems key={product.id} product={product}/>
          })
         }
        </Row>
        <div>
          <hr />
          <h5>Total Amount</h5>
          <h5>Rs. 555</h5>
        </div>
      </Container>
    </CartModel>
  );
};

export default Cart;
