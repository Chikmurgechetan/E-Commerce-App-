import React, { useContext } from "react";
import { Button, Card, CardHeader, CardImg, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import CartContext from "../Context/CartContext";

const ProductItem = (props) => {
  const cartCtx = useContext(CartContext);
  const { id } = props.product;
  
  
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
        head: props.product.title,
        imageSrc: props.product.imageSrc,
        price: props.product.price,
        quantity: 1,
      });
    }
  };

  return (
    <Col md="6" className="mb-4" style={{ margin: "0rem" }}>
      <Card style={{ width: "15rem", margin: "1rem" }}>
        <CardHeader style={{ textAlign: "center", fontWeight: "bold" }}>
          {props.product.title}
        </CardHeader>
        <Link to={`/products/${id}`} style={{ color: "black" }}>
          <CardImg
            src={props.product.imageSrc}
            style={{ height: "12rem", objectFit: "contain" }}
          />
        </Link>

        <Card.Body>
          <Card.Title>{props.product.brand}</Card.Title>
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
