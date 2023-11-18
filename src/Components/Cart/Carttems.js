import React from "react";
import { Image, Col, Form, Button, Row } from "react-bootstrap";

const CartItems = (props) => {
 
  const handleRemove = () => {
    // Call the removeItem function passed as a prop with the product id
    props.remmovItem(props.product.id, props.product.price);
  };
  return (
    <div>
      <Row
        className="my-3"
        style={{
          borderBottom: "1px solid red",
          display: "flex",
          alignItems: "center",
          padding: "10px",
        }}
      >
        <Col xs={3}>
          <Image src={props.product.imageUrl} fluid />
          <p style={{fontWeight:'bold'}}>{props.product.head}</p>
        </Col>
        <Col xs={4}>
          <p style={{ marginTop: "1.6rem",marginLeft:'1rem' }}> Rs:-{props.product.price} </p>
       
        </Col>
        <Col xs={5} className="d-flex align-items-center">
          <Form.Control
            type="text"
            min="1"
            placeholder="1"
            className="form-control"
            style={{
              width: "50px",
              marginRight: "20px",
              border: "1px solid black",
            }}
          />
          <Button variant="outline-danger" style={{ marginLeft: "1rem" }} onClick={handleRemove}>
            Remove
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default CartItems;
