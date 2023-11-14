import React from "react";
import { Image, Col, Form, Button, Row } from "react-bootstrap";

const CartItems = (props) => {
  return (
    <div>
      <Row className="my-3">
        <Col xs={3}>
          <Image src={props.product.imageUrl} fluid />
        </Col>
        <Col xs={9}>
          <h5>{props.product.title}</h5>
          <p>{`${props.product.price} X ${props.product.quantity} = Rs. 500`}</p>
          <div className="d-flex align-items-center my-2">
            <Form.Control
              type="number"
              min="1"
              className="form-control"
              style={{ width: "50px" }}
            />
            <Button variant="outline-danger" style={{ marginLeft: "20px" }}>
              Remove
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default CartItems;
