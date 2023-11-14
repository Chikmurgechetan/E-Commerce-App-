import React from "react";
import { Button, Card, CardHeader, CardImg, Col } from "react-bootstrap";

const ProductItem = (props) => {
  return (
    <Col md="6" className="mb-4" style={{margin:'0rem'}}>
      <Card style={{ width: "15rem", margin: "1rem" }}>
        <CardHeader style={{ textAlign: "center", fontWeight: "bold" }}>
          {props.product.head}
        </CardHeader>
        <CardImg src={props.product.imageUrl} style={{ height: '12rem', objectFit: 'cover' }} />
        <Card.Body>
          <Card.Title>{props.product.title}</Card.Title>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Card.Text style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Rs:- {props.product.price}</Card.Text>
            <Button variant="dark">ADD CART</Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ProductItem;
