import React, { useContext } from "react";
import { Button, Card, CardHeader, CardImg, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import CartContext from "../Context/CartContext";
import AuthoContext from "../Context/Autho-Context";

const ProductItem = (props) => {
  const cartCtx = useContext(CartContext);
  const authCtx = useContext(AuthoContext);
  const navigate = useNavigate();

  const { id } = props.product;

  

  const addToCartHandler = (event) => {
    event.preventDefault();

    if (!authCtx.isLoggedIn) {
      // If the user is not logged in, navigate to the login page
      navigate("/login");
      return;
    }

    const existingCartItem = cartCtx.cartItems.find(
      (item) => item.id === props.product.id
    );

    if (existingCartItem) {
      // Item already is in the cart!
      alert("The item is already in the cart!");
    } else {
      // Item doesn't exist in the cart; add it
      const newCartItem = {
        id: props.product.id,
        head: props.product.title,
        imageSrc: props.product.imageSrc,
        price: props.product.price,
        quantity: 1,
      };
      console.log(typeof newCartItem.quantity);

      // Update the local cart context
      cartCtx.addCartItems(newCartItem);
     
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
