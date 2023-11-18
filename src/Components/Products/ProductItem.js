import React, { useContext } from "react";
import { Button, Card, CardHeader, CardImg, Col } from "react-bootstrap";
import CartContext from "../Context/CartContext";

const ProductItem = (props) => {
  const cartCtx = useContext(CartContext);
  const addToCartHandler = (event) => {
    event.preventDefault();

    const existingCartItem = cartCtx.cartItems.find(
      (item) => item.id === props.product.id
    );

    if (existingCartItem) {
      //item already is in the cart!
      alert("The item is already in the cart!");
    } else {
      //Item doesn't exist in the cart add it

      cartCtx.addCartItems({
        id: props.product.id,
        head:props.product.head,
        imageUrl: props.product.imageUrl,
        price: props.product.price,
        quantity: 1,
      });
    }
  };

  return (
    <Col md="6" className="mb-4" style={{ margin: "0rem" }}>
      <Card style={{ width: "15rem", margin: "1rem" }}>
        <CardHeader style={{ textAlign: "center", fontWeight: "bold" }}>
          {props.product.head}
        </CardHeader>
        <CardImg
          src={props.product.imageUrl}
          style={{ height: "12rem", objectFit: "cover" }}
        />
        <Card.Body>
          <Card.Title>{props.product.title}</Card.Title>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Card.Text style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
              Rs:- {props.product.price}
            </Card.Text>
            <Button variant="dark" onClick={addToCartHandler}>
              ADD CART
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ProductItem;
