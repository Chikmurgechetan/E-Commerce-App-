import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CartContext from "../Context/CartContext";
import {
  CardImg,
  Row,
  Col,
  Card,
  ListGroup,
  ListGroupItem,
  Button,
} from "react-bootstrap";

const ProductDetails = () => {
  const Parms = useParams();
  const id = Parms.id;
  //sssconsole.log(id);
  console.log(id);
  const ctx = useContext(CartContext);

  const navigate = useNavigate();

  const productsList = ctx.productsList;
  const product = { ...productsList.filter((item) => item.id === id)[0] };
  console.log(product);

  const addToCartHandler = (event) => {
    event.preventDefault();

    const existingCartItem = ctx.cartItems.find(
      (item) => item.id === product.id
    );

    if (existingCartItem) {
      //item already is in the cart!
      alert("The item is already in the cart!");
    } else {
      //Item doesn't exist in the cart add it
      ctx.addCartItems({
        id: product.id,
        title: product.title,
        imageSrc: product.imageSrc,
        price: product.price,
        quantity: 1,
      });
    }
    navigate("/");
  };

  return (
    <>
      <div style={{ margin: "1rem" }}>
        <Row>
          <Col md={6}>
            <Card style={{ borderRadius: "20px", overflow: "hidden" }}>
              <CardImg
                variant="top"
                src={product.imageSrc}
                style={{
                  height: "500px",
                  width: "100%",
                  objectFit: "cover",
                }}
              />
              <Card.Body className="text-center">
                <Card.Text style={{ fontSize: "18px", color: "#777" }}>
                  Explore the beauty of this product.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card style={{ border: "none" }}>
              <Card.Body>
                <Card.Title
                  style={{
                    fontSize: "36px",
                    fontWeight: "bold",
                    marginBottom: "15px",
                  }}
                >
                  {product.title}
                </Card.Title>
                <Card.Text
                  style={{
                    marginBottom: "20px",
                    color: "#555",
                    fontSize: "18px",
                  }}
                >
                  {product.description}
                </Card.Text>
                <ListGroup>
                  <ListGroupItem>
                    <strong>Price:</strong> {product.price}
                  </ListGroupItem>
                  <ListGroupItem>
                    <strong>Brand:</strong> {product.brand}
                  </ListGroupItem>
                  <ListGroupItem>
                    <strong>Color:</strong> {product.color}
                  </ListGroupItem>
                  <ListGroupItem>
                    <strong> Size:-</strong>{" "}
                    <span style={{ margin: "1rem" }}>S</span>{" "}
                    <span style={{ margin: "1rem" }}>M</span>{" "}
                    <span style={{ margin: "1rem" }}>L</span>
                  </ListGroupItem>
                </ListGroup>
                <div className="d-grid gap-2 mt-4">
                  <Button
                    variant="dark"
                    style={{ fontSize: "20px", borderRadius: "10px" }}
                    onClick={addToCartHandler}
                  >
                    Add to Cart
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default ProductDetails;
